from django.contrib import admin
from django.urls import path, include
from pacientes_api.autorizacion.auth_views import LoginAPIView
from pacientes_api.roles import urls as roles_url
from pacientes_api.usuarios import urls as usuarios_urls
from pacientes_api.pacientes import urls as pacientes_urls
from pacientes_api.especialidades import urls as especialidades_urls
from pacientes_api.temas import urls as temas_urls
from pacientes_api.examen import urls as examen_urls
from pacientes_api.reportes import urls as reportes_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/', LoginAPIView.as_view()),
    path('api/roles/', include(roles_url)),
    path('api/usuarios/', include(usuarios_urls)),
    path('api/pacientes/', include(pacientes_urls)),
    path('api/especialidades/', include(especialidades_urls)),
    path('api/temas/', include(temas_urls)),
    path('api/examen/', include(examen_urls)),
    path('api/reportes/', include(reportes_urls))
]
