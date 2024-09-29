from rest_framework import serializers
from .especialidades_models import Especialidades
from hashids import Hashids

class EspecialidadSerializer(serializers.ModelSerializer):
    HASHIDS = Hashids(salt='specialties2024$&', min_length=15)
    id = serializers.SerializerMethodField()

    class Meta:
        model = Especialidades
        fields = '__all__'

    def create(self, validated_data):
        especialidad = Especialidades.objects.create(
            name = validated_data['name'],
            description = validated_data['description']
        )

        return especialidad
    
    def get_id(self, instance):
        return self.HASHIDS.encode(instance.id)

    def decode_id(self, id):
        decoded_value = self.HASHIDS.decode(id)
        return decoded_value[0] if decoded_value else -1