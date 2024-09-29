from django.urls import path
from .especialidades_views import (EspecialidadesView, EspecialidadGetById)

urlpatterns = [
    path('create/', EspecialidadesView.as_view()),
    path('edit/<str:specialty_id>', EspecialidadesView.as_view()),
    path('list/', EspecialidadesView.as_view()),
    path('list/<str:specialty_id>', EspecialidadGetById.as_view()),
    path('delete/<str:specialty_id>', EspecialidadesView.as_view()),    
]