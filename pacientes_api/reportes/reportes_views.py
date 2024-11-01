from rest_framework.views import APIView
from django.http import HttpResponse
from ..standarResponse import standar_response, server_error, bad_request
from django.template.loader import get_template
from ..examen.examen_serializer import ExamenSerializer
from ..examen.examen_models import Examen
from ..temas.temas_models import Temas
from xhtml2pdf import pisa


test_decode = ExamenSerializer(Examen)

class TestPatient(APIView):
    def get(self, request, test_id):
        """
            REPORTE DEL DIAGNÓSTICO DE UN PACIENTE
        """
        try:
            id = test_decode.decode_id(test_id)
            examen = Examen.objects.select_related('patient', 'user').get(id=id)            
            format_data = {
                'patient': f"{examen.patient.first_name} {examen.patient.last_name}",
                'patient_cedula':examen.patient.cedula,
                'patient_phone':examen.patient.phone,
                'patient_age': examen.patient.age,
                'patient_gender': 'Masculino' if examen.patient.gender == "M" else "Femenino",
                'patient_address':examen.patient.address,
                'created_at': examen.crated_at,
                'diagnostic': examen.diagnostic,
                'temas': '',
                'medico': f"{examen.user.first_name} {examen.user.last_name}",
                'medico_phone':examen.user.phone,
                'medico_address':examen.user.address
            }                                   

            temas = Temas.objects.filter(id__in=examen.temas)
            format_data['temas'] = [tema.name for tema in temas ]
                                    
            template = get_template('consult.html')
            html = template.render(format_data)
            response = HttpResponse(content_type='application/pdf')
            response['Content-Disposition'] = 'attachment; filename="reporte_consultas.pdf"'
            pisa_status = pisa.CreatePDF(html, dest=response)

            if pisa_status.err:
                return bad_request(message="Ocurrio un error al generar el PDF")

            return response
        
        except Examen.DoesNotExist:
            return bad_request(message="No existe el diagnóstico solicitado", code=False)
        
        except Exception as e:            
            print(e)
            return server_error()