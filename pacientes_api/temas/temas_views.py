from rest_framework.views import APIView
from ..standarResponse import standar_response, server_error, bad_request
from .temas_models import Temas
from .temas_serializer import TemasSerializer, TemasGetSerializer

obj_decode = TemasGetSerializer(Temas)

class TemasView(APIView):

    def get(self, request):
        """
            MÉTODO PARA OBTENER TEMAS
        """
        try:
            res = Temas.objects.filter(is_active=True)            
            serializer = TemasGetSerializer(res, many=True)
            return standar_response(data=serializer.data)
        except Exception as e:
            print(e)
            return server_error()

    def post(self, request):
        """
            MÉTODO PARA CREAR CREAR TEMAS
        """
        try:
            data = request.data
            data['specialty'] = obj_decode.decode_specialty(data['specialty'])
            serializer = TemasSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return standar_response(message="Tema registrado exitosamente")
            return bad_request(message=serializer.errors)
        except Exception as e:
            print(e)
            return server_error()
        
    def put(self, request, tema_id):
        """
            MÉTODO PARA ACTUALIZAR DATOS DEL TEMA
        """
        try:
            id = obj_decode.decode_id(tema_id)            
            res = Temas.objects.get(id = id)            
            data = request.data
            data['specialty'] = obj_decode.decode_specialty(data['specialty'])
            serializer = TemasSerializer(res, data=data)
            if serializer.is_valid():
                serializer.save()
                return standar_response(message="Tema actualizado exitosamente")
            return bad_request(message=serializer.errors)
        except Temas.DoesNotExist:
            return bad_request(message="El Tema no existe", code=False)
        except Exception as e:
            print(e)
            return server_error()
        
    def delete(self, request, tema_id):
        """
            MÉTODO PARA ELIMINAR ESPECIALIDADES
        """
        try:
            id = obj_decode.decode_id(tema_id)
            res = Temas.objects.get(id=id)
            res.is_active = False
            res.save()
            return standar_response(message="Tema eliminado exitosamente", data=tema_id)
        except Temas.DoesNotExist:
            return bad_request(message="El tema no existe", code=False)
        except Exception as e:
            print(e)
            return server_error()
        
class TemaGetById(APIView):
    def get(self, request, tema_id):
        """
            MÉTODO PARA OBTENER EL TEMA POR EL ID
        """
        try:
            id = obj_decode.decode_id(tema_id)
            res = Temas.objects.get(id=id)
            serializer = TemasGetSerializer(res)
            return standar_response(message="Tema obtenido exitosamente", data=serializer.data)
        except Temas.DoesNotExist:
            return bad_request(message="El tema no existe", code=False)
        except Exception as e:
            print(e)
            return server_error()