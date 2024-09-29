from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import authenticate
from datetime import datetime
from ..standarResponse import standar_response


class LoginAPIView(APIView):
    def post(self, request):
        try:
            username = request.data.get('username')
            password = request.data.get('password')
            user = authenticate(request, username=username, password=password)
            if user:
                # refresh = RefreshToken.for_user(user)
                return standar_response(
                    message="Hola bienvenido",
                    data={
                        'user': user.username,
                        # 'jwtToken': str(refresh.access_token),
                        'nombre': f"{user.first_name} {user.last_name}",
                        'email': user.email,
                        'timestamp': datetime.now().isoformat()})

            return standar_response(
                success=False,
                code=404,
                message="Las credenciales son incorrectas",
                status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return standar_response(
                success=False,
                code=500,
                message="Ocurrio un error inesperado",
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
