from rest_framework.views import APIView
from ..standarResponse import standar_response, server_error, bad_request
from .usuarios_serializer import UserSerializer, UserGetSerializer
from .usuarios_models import CustomUser

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
            MÉTODO PARA CREAR USUARIOS
        """
        try:
            serializer = UserSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return standar_response(
                    message="Usuario creado exitosamente",
                    data=serializer.data,
                )
            return bad_request(message=serializer.errors)
               
        except Exception as e:
            print(e)
            return server_error()
        
    def put(self, request):
        pass

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
            return standar_response(message="Usuario cargado exitosamente", data=serializer.data)
           
        except CustomUser.DoesNotExist:
            return bad_request(message="El usuario no existe", code=False)
        
        except Exception as e:
            print(e)
            return server_error()
    