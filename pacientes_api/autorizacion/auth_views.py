from rest_framework.views import APIView
from django.contrib.auth import authenticate
from datetime import datetime
from ..standarResponse import standar_response, server_error, bad_request


class LoginAPIView(APIView):
    def post(self, request):
        try:
            username = request.data.get('username')
            password = request.data.get('password')
            user = authenticate(request, username=username, password=password)
            if user:
                roles = user.groups.all()
                role_names = [group.name for group in roles]                
                return standar_response(
                    message="Hola, bienvenido",
                    data={
                        'user': user.username,
                        'nombre': f"{user.first_name} {user.last_name}",
                        'email': user.email,
                        'role': role_names[0] or "",
                        'timestamp': datetime.now().isoformat()
                    })
                        
            return bad_request(
                message="Las credenciales son incorrectas",
                code=False
            )

        except Exception as e:
            print(e)
            return server_error()