from django.urls import path
from .reportes_views import (
    TestPatient
)


urlpatterns = [
    path('consult/<str:test_id>', TestPatient.as_view()),
]