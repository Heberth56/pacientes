from rest_framework.views import APIView
from ..standarResponse import standar_response, server_error, bad_request
from .pacientes_serializer import PacienteSerializer
from .pacientes_models import Pacientes

obj_decode = PacienteSerializer(Pacientes)

class PacientesViews(APIView):

    def get(self, request):        
        """
            MÉTODO PARA OBTENER PACIENTES
        """
        try:
            res = Pacientes.objects.filter(is_active=True).order_by('first_name')
            serializer = PacienteSerializer(res, many=True)
            return standar_response(data=serializer.data)
        except Exception as e:
            print(e)
            return server_error()


    def post(self, request):
        """
            MÉTODO PARA CREAR CREAR PACIENTES
        """
        try:
            serializer = PacienteSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return standar_response(message="Paciente registrado exitosamente")
            return bad_request(message=serializer.errors)
        except Exception as e:
            print(e)
            return server_error()
    
    def put(self, request, patient_id):
        """
            MÉTODO PARA ACTUALIZAR DATOS DEL PACIENTE
        """
        try:
            id = obj_decode.decode_id(patient_id)
            res = Pacientes.objects.get(id = id)
            serializer = PacienteSerializer(res, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return standar_response(message="Paciente actualizado exitosamente")
            return bad_request(message=serializer.errors)
        except Pacientes.DoesNotExist:
            return bad_request(message="El paciente no existe", code=False)
        except Exception as e:
            print(e)
            return server_error()
    
    def delete(self, request, patient_id):
        """
            MÉTODO PARA ELIMINAR PACIENTES
        """
        try:
            id = obj_decode.decode_id(patient_id)
            res = Pacientes.objects.get(id=id)
            res.is_active = False
            res.save()
            return standar_response(message="Paciente eliminado exitosamente", data=patient_id)
        except Pacientes.DoesNotExist:
            return bad_request(message="El paciente no existe", code=False)
        except Exception as e:
            print(e)
            return server_error()
        
class PacienteGetById(APIView):
    def get(self, request, patient_id):
        """
            MÉTODO PARA OBTENER PACIENTE POR EL ID
        """
        try:
            id = obj_decode.decode_id(patient_id)
            res = Pacientes.objects.get(id=id)
            serializer = PacienteSerializer(res)
            return standar_response(message="Paciente obtenido exitosamente", data=serializer.data)
        except Pacientes.DoesNotExist:
            return bad_request(message="El paciente no existe", code=False)
        except Exception as e:
            print(e)
            return server_error()
