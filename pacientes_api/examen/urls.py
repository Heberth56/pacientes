from django.urls import path
from .examen_views import (ExamenView, EspecialidadTemaList, DiagnosticList, ListDiagnosticPatient)

urlpatterns = [
    path('create/', ExamenView.as_view()),
    # path('edit/<str:tema_id>', TemasView.as_view()),
    path('list/', EspecialidadTemaList.as_view()),
    path('listado/', ExamenView.as_view()),
    path('list-diagnostic/<str:cedula>', ListDiagnosticPatient.as_view()),
    path('diagnostic/<str:test_id>', DiagnosticList.as_view())
    # path('delete/<str:tema_id>', TemasView.as_view()),
]