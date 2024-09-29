from rest_framework import serializers
from .examen_models import Examen
from hashids import Hashids 

class ExamenSerializer(serializers.ModelSerializer):
    HASHIDS = Hashids(salt='tests2024$&', min_length=15)
    id = serializers.SerializerMethodField()

    class Meta:
        model = Examen
        fields = '__all__'

    def create(self, validated_data):
        examen = Examen.objects.create(            
            patient = validated_data['patient'],
            temas = validated_data['temas'],
            user = validated_data['user'],
            diagnostic = validated_data['diagnostic']
        )
        return examen
    
    def get_id(self, instance):
        return self.HASHIDS.encode(instance.id)
    
    def enconde_id(self, id):
        return self.HASHIDS.encode(id)

    def decode_id(self, id):
        decoded_value = self.HASHIDS.decode(id)
        return decoded_value[0] if decoded_value else -1