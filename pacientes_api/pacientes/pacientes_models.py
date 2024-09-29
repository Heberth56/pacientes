from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

GENERO_CHOICES = [('M', 'Masculino'), ('F', 'Femenino'),]

class Pacientes(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=80)
    cedula = models.CharField(max_length=25, unique=True)
    gender = models.CharField(max_length=1, choices=GENERO_CHOICES,)
    age = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(150)], blank=True, null=True)
    address = models.CharField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'trs_pacientes'

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"