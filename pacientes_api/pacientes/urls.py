from django.urls import path
from .pacientes_views import (PacientesViews, PacienteGetById)

urlpatterns = [
    path('create/', PacientesViews.as_view()),
    path('edit/<str:patient_id>', PacientesViews.as_view()),
    path('list/', PacientesViews.as_view()),
    path('list/<str:patient_id>', PacienteGetById.as_view()),
    path('delete/<str:patient_id>', PacientesViews.as_view()),    
]