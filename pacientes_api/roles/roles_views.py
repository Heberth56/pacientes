from rest_framework.views import APIView
from rest_framework import generics
from django.contrib.auth.models import Group
from .roles_serializer import GroupSerializer
from ..standarResponse import standar_response, server_error
from hashids import Hashids

HASH_IDS_ROLE = 'role2024$&'

class Roles(APIView):
    def get(self, request):
        try:
            res = Group.objects.all()
            serializer = GroupSerializer(res, many=True)
            hashids = Hashids(salt=HASH_IDS_ROLE, min_length=15)
            for item in serializer.data:
                item['id'] = hashids.encode(item['id'])
            return standar_response(message='Roles obtenidos exitosamente', data=serializer.data)
        except Exception as e:
            print(e)
            return server_error()