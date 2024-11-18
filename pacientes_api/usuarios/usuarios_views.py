from django.contrib.auth.models import Group
from rest_framework.views import APIView
from ..standarResponse import standar_response, server_error, bad_request
from .usuarios_serializer import UserSerializer, UserGetSerializer,UserSerializerUpdate
from .usuarios_models import CustomUser
from hashids import Hashids

HASH_IDS_ROLE = 'role2024$&'
hashids = Hashids(salt=HASH_IDS_ROLE, min_length=15)

obj_decode = UserGetSerializer(CustomUser)

class Usuarios_api(APIView):    

    def get(self, request):
        """
            MÉTODO PARA OBTENER USUARIOS
        """
        try:           
            res = CustomUser.objects.filter(is_active=True)
            serializer = UserGetSerializer(res, many=True)
            return standar_response(data=serializer.data)
        except Exception as e:
            print(e)
            return server_error()
        
    def post(self, request):
        """
            MÉTODO PARA CREAR USUARIOS Y ASIGNARLOS A UN GRUPO
        """
        try:
            serializer = UserSerializer(data=request.data)
            if serializer.is_valid():
                user = serializer.save()
                group_id = request.data.get('role')
                if group_id:
                    try:
                        group = Group.objects.get(id=hashids.decode(group_id)[0])
                        user.groups.add(group)
                    except Group.DoesNotExist:
                        return bad_request(message=f"El rol no existe.")

                return standar_response(
                    message="Usuario creado exitosamente",
                    data=serializer.data,
                )
            return bad_request(message=serializer.errors)

        except Exception as e:
            print(e)
            return server_error()
        
    def put(self, request, user_id):
        """
            MÉTODO PARA EDITAR USUARIOS
        """
        try:
            id = obj_decode.decode_id(user_id)
            res = CustomUser.objects.get(id = id)
            serializer = UserSerializerUpdate(res, data=request.data)
            if serializer.is_valid():
                user = serializer.save()
                group_id = request.data.get('role')
                if group_id:
                    try:
                        group = Group.objects.get(id=hashids.decode(group_id)[0])
                        user.groups.clear()
                        user.groups.add(group)
                    except Group.DoesNotExist:
                        return bad_request(message=f"El rol no existe.")
                return standar_response(message="Usuario actualizado exitosamente")
            return bad_request(message=serializer.errors)
        except CustomUser.DoesNotExist:
            return bad_request(message="El usuario no existe", code=False)
        except Exception as e:
            print(e)
            return server_error()

    def delete(self, request, user_id):
        """
            MÉTODO PARA ELIMINAR USUARIOS
        """
        try:
            id = obj_decode.decode_id(user_id)
            res = CustomUser.objects.get(id=id)                        
            res.is_active = False
            res.save()
            return standar_response(message="Usuario eliminado exitosamente", data=user_id)
           
        except CustomUser.DoesNotExist:
            return bad_request(message="El usuario no existe", code=False)
        
        except Exception as e:
            print(e)
            return server_error()
        
class UserAdicional(APIView):
    
    def get(self, request, user_id):
        """
            MÉTODO PARA OBTENER USUARIO POR ID
        """
        try:
            id = obj_decode.decode_id(user_id)
            res = CustomUser.objects.get(id=id)
            serializer = UserGetSerializer(res)
            data_serializer = serializer.data            
            for user_group in res.groups.through.objects.filter(customuser_id=res.id):
                data_serializer['role'] = hashids.encode(user_group.group_id)
            return standar_response(message="Usuario cargado exitosamente", data=data_serializer)
           
        except CustomUser.DoesNotExist:
            return bad_request(message="El usuario no existe", code=False)
        
        except Exception as e:
            print(e)
            return server_error()
    