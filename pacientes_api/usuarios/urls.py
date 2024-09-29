from django.urls import path
from .usuarios_views import (Usuarios_api, UserAdicional)

urlpatterns = [
    path('create/', Usuarios_api.as_view()),
    path('list/', Usuarios_api.as_view()),
    path('delete/<str:user_id>', Usuarios_api.as_view()),
    path('list/<str:user_id>', UserAdicional.as_view()),
]
