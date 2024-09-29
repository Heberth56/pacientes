from rest_framework.views import APIView
from ..standarResponse import standar_response, server_error, bad_request
from .especialidades_serializer import EspecialidadSerializer
from .especialidades_models import Especialidades

obj_decode = EspecialidadSerializer(Especialidades)

class EspecialidadesView(APIView):

    def get(self, request):
        """
            MÉTODO PARA OBTENER ESPECIALIDADES
        """
        try:
            res = Especialidades.objects.filter(is_active=True)            
            serializer = EspecialidadSerializer(res, many=True)
            return standar_response(data=serializer.data)
        except Exception as e:
            print(e)
            return server_error()
        
    def post(self, request):
        """
            MÉTODO PARA CREAR CREAR ESPECIALIDADES
        """
        try:
            serializer = EspecialidadSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return standar_response(message="Especialidad registrado exitosamente")
            return bad_request(message=serializer.errors)
        except Exception as e:
            print(e)
            return server_error()
        
    def put(self, request, specialty_id):
        """
            MÉTODO PARA ACTUALIZAR DATOS DE LA ESPECIALIDAD
        """
        try:
            id = obj_decode.decode_id(specialty_id)            
            res = Especialidades.objects.get(id = id)
            serializer = EspecialidadSerializer(res, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return standar_response(message="Especialidad actualizado exitosamente")
            return bad_request(message=serializer.errors)
        except Especialidades.DoesNotExist:
            return bad_request(message="La especialidad no existe", code=False)
        except Exception as e:
            print(e)
            return server_error()
        
    def delete(self, request, specialty_id):
        """
            MÉTODO PARA ELIMINAR ESPECIALIDADES
        """
        try:
            id = obj_decode.decode_id(specialty_id)
            res = Especialidades.objects.get(id=id)
            res.is_active = False
            res.save()
            return standar_response(message="Especialidad eliminado exitosamente", data=specialty_id)
        except Especialidades.DoesNotExist:
            return bad_request(message="La especialidad no existe", code=False)
        except Exception as e:
            print(e)
            return server_error()
        
class EspecialidadGetById(APIView):
    def get(self, request, specialty_id):
        """
            MÉTODO PARA OBTENER LA ESPECIALIDAD POR EL ID
        """
        try:
            id = obj_decode.decode_id(specialty_id)
            res = Especialidades.objects.get(id=id)
            serializer = EspecialidadSerializer(res)
            return standar_response(message="Especialidad obtenido exitosamente", data=serializer.data)
        except Especialidades.DoesNotExist:
            return bad_request(message="La especialidad no existe", code=False)
        except Exception as e:
            print(e)
            return server_error()