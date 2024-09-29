from rest_framework import serializers
from .temas_models import Temas
from hashids import Hashids

#ESTA CLASE SE USA PARA OBTENER LOS DATOS DE LOS TEMAS Y PARA ENCRIPTAR LOS IDS DE TEMA_ID Y SPECIALTY_ID
class TemasGetSerializer(serializers.ModelSerializer):
    HASHIDS = Hashids(salt='temas2024$&', min_length=15)
    HASHIDS_SPECIALTY = Hashids(salt='specialties2024$&', min_length=15)
    id = serializers.SerializerMethodField()
    specialty = serializers.SerializerMethodField()

    class Meta:
        model = Temas        
        fields = '__all__'

    def get_id(self, instance):
        return self.HASHIDS.encode(instance.id)

    def get_specialty(self, instance):
        return self.HASHIDS_SPECIALTY.encode(instance.specialty.id)
    
    def decode_id(self, id):
        decoded_value = self.HASHIDS.decode(id)
        return decoded_value[0] if decoded_value else -1   
    
    def decode_specialty(self, id):
        decoded_value = self.HASHIDS_SPECIALTY.decode(id)
        return decoded_value[0] if decoded_value else -1


class TemasSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Temas        
        fields = '__all__'
    
    def create(self, validated_data):
        tema = Temas.objects.create(
            specialty = validated_data['specialty'],
            name = validated_data['name'],
            description = validated_data['description']
        )

        return tema
    
         
    