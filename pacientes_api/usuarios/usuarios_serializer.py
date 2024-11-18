from rest_framework import serializers
from .usuarios_models import CustomUser
from hashids import Hashids

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CustomUser        
        fields = ['password', 'username', 'first_name', 'last_name', 'email', 'cedula', 'gender', 'age', 'address', 'phone']
           
    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            password = validated_data['password'],
            username = validated_data['username'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            email = validated_data.get('email', ''),
            cedula = validated_data['cedula'],
            gender = validated_data.get('gender', None),
            age = validated_data.get('age', None),
            address = validated_data.get('address', ''),
            phone = validated_data.get('phone', ''),            
        )
        return user

class UserSerializerUpdate(serializers.ModelSerializer):
    
    class Meta:
        model = CustomUser        
        fields = [ 'username', 'first_name', 'last_name', 'email', 'cedula', 'gender', 'age', 'address', 'phone']
           
    def create(self, validated_data):
        user = CustomUser.objects.create_user(            
            username = validated_data['username'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            email = validated_data.get('email', ''),
            cedula = validated_data['cedula'],
            gender = validated_data.get('gender', None),
            age = validated_data.get('age', None),
            address = validated_data.get('address', ''),
            phone = validated_data.get('phone', ''),            
        )
        return user
    
class UserGetSerializer(serializers.ModelSerializer):
    HASHIDS = Hashids(salt='users2024$&', min_length=15)
    id = serializers.SerializerMethodField()
    class Meta:
        model = CustomUser        
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'cedula', 'gender', 'age', 'address', 'phone', 'is_active']
    
    def get_id(self, instance):
        return self.HASHIDS.encode(instance.id)
        
    def decode_id(self, user_id):
        decoded_values = self.HASHIDS.decode(user_id)
        id = decoded_values[0] if decoded_values else -1
        return id
    
    print()