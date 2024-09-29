from django.urls import path

from .roles_views import (Roles)

urlpatterns = [
    path('listar/', Roles.as_view()),
]