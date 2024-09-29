from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

GENERO_CHOICES = [('M', 'Masculino'), ('F', 'Femenino'),]

class CustomUser(AbstractUser):
    cedula = models.CharField(max_length=15, unique=True)
    gender = models.CharField(max_length=1, choices=GENERO_CHOICES, blank=True, null=True)
    age = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(150)], blank=True, null=True)
    address = models.CharField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        db_table = "users"