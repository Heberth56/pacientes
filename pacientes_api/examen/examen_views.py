from rest_framework.views import APIView
from ..standarResponse import standar_response, server_error, bad_request
from .examen_models import Examen
from .examen_serializer import ExamenSerializer
from ..especialidades.especialidades_models import Especialidades
from ..temas.temas_models import Temas
from ..temas.temas_serializer import TemasGetSerializer
from ..pacientes.pacientes_models import Pacientes
from ..pacientes.pacientes_serializer import PacienteSerializer
from ..usuarios.usuarios_models import CustomUser
from ..usuarios.usuarios_serializer import UserGetSerializer
from datetime import datetime

tema_decode = TemasGetSerializer(Temas)
patient_decode = PacienteSerializer(Pacientes)
user_decode = UserGetSerializer(CustomUser)
test_decode = ExamenSerializer(Examen)

class ExamenView(APIView):

    def format_date(self, date_str):
        date_obj = datetime.strptime(date_str, '%Y-%m-%d')
        return date_obj.strftime('%d-%m-%Y')

    def get(self, request):
        """
            MÉTODO PARA OBTENER EXAMENES REGISTRADOS
        """
        try:
            format_data = []
            res = Examen.objects.filter(is_active=True).select_related('patient')           
            for i in res:
                format_data.append({
                    'id':test_decode.enconde_id(i.id),
                    'date':self.format_date(str(i.crated_at)),
                    'name':i.patient.first_name + " "+ i.patient.last_name,
                    'cedula':i.patient.cedula
                })                
            
            return standar_response(data = format_data, message="Datos obtenidos exitosamente")
        except Exception as e:
            print(e)
            return server_error()

    def post(self, request):
        """
            MÉTODO PARA REGISTRAR EXAMENES
        """
        try:
            ids = []
            format_data = {                    
                    'patient':patient_decode.decode_id(request.data['patient']),
                    'temas':'',
                    'user':user_decode.decode_id(request.data['user']),
                    'diagnostic':request.data['diagnostic']
                }                        

            for i in request.data['temas']:
                id = tema_decode.decode_id(i)
                if id < 0:
                    return bad_request(message="Ocurrio un error")                
                ids.append(id)
            format_data['temas'] = ids

            serializer = ExamenSerializer(data=format_data)
            if serializer.is_valid():
                serializer.save()
                return standar_response(message="Examen registrado exitosamente")            
            return bad_request(message=serializer.errors)
        except Exception as e:
            print(e)
            return server_error()

class EspecialidadTemaList(APIView):

    def get(self, request):
        """
            MÉTODO PARA OBTENER ESPECIALIDADES Y TEMAS
        """
        try:

            format_data = []
            spec = Especialidades.objects.filter(is_active = True)
            for i in spec:
                res = Temas.objects.filter(specialty=i.id, is_active = True)
                serializer = TemasGetSerializer(res, many=True)
                format_data.append({
                    'name':i.name,
                    'temas':serializer.data
                })               
            return standar_response(data=format_data, message="Datos obtenidos exitosamente")
        except Exception as e:
            print(e)
            return server_error()
        
class DiagnosticList(APIView):
    def get(self, request, test_id):
        """
            MÉTODO PARA OBTENER DIAGNOSTICO DEL PACIENTE
        """
        try:
            id = test_decode.decode_id(test_id)
            examen = Examen.objects.select_related('patient', 'user').get(id=id)
            format_data = {
                'patient': f"{examen.patient.first_name} {examen.patient.last_name}",
                'age': examen.patient.age,
                'created_at': examen.crated_at,  
                'diagnostic': examen.diagnostic,
                'temas': '',  
                'medico': f"{examen.user.first_name} {examen.user.last_name}",
            }                                   

            temas = Temas.objects.filter(id__in=examen.temas)
            format_data['temas'] = [tema.name for tema in temas ]
            return standar_response(data=format_data,message="Datos obtenidos exitosamente")
        except Examen.DoesNotExist:
            return bad_request(message="No existe el diagnóstico solicitado", code=False)
        except Exception as e:
            print(e)
            return server_error()
        
class ListDiagnosticPatient(APIView):
    def get(self, request, cedula):
        """
            MÉTODO PARA OBTENER DIAGNOSTICO DEL PACIENTE
        """
        try:
            format_data = {
                'patient':'',
                'cedula':'',
                'result':[]
            }
            examen = Examen.objects.filter(patient__cedula = cedula, patient__is_active = True).select_related('patient')
            if not examen.exists():
                return bad_request(message="No se encontraron resultados de la busqueda", code=False)            
            for i in examen:                
                format_data['patient'] = i.patient.first_name+' '+i.patient.last_name
                format_data['cedula'] = i.patient.cedula
                format_data['result'].append({})
                print(i)
            return standar_response(data=format_data, message="Datos obtenidos exitosamente")
        except Exception as e:
            print(e)
        return server_error()

