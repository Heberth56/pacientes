from rest_framework import serializers
from .pacientes_models import Pacientes
from hashids import Hashids

class PacienteSerializer(serializers.ModelSerializer):
    HASHIDS = Hashids(salt='patients2024$&', min_length=15)
    id = serializers.SerializerMethodField()

    class Meta:
        model = Pacientes
        fields = '__all__'
    
    def create(self, validated_data):
        paciente = Pacientes.objects.create(
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            cedula = validated_data['cedula'],
            gender = validated_data['gender'],
            age = validated_data['age'],
            address = validated_data['address'],
            phone = validated_data['phone']
        )

        return paciente

    def get_id(self, instance):
        return self.HASHIDS.encode(instance.id)

    def decode_id(self, id):
        decoded_value = self.HASHIDS.decode(id)
        return decoded_value[0] if decoded_value else -1