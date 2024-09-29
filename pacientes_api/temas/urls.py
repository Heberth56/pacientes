from django.urls import path
from .temas_views import (TemasView, TemaGetById)

urlpatterns = [
    path('create/', TemasView.as_view()),
    path('edit/<str:tema_id>', TemasView.as_view()),
    path('list/', TemasView.as_view()),
    path('list/<str:tema_id>', TemaGetById.as_view()),
    path('delete/<str:tema_id>', TemasView.as_view()),
]