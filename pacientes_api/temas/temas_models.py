from django.db import models
from ..especialidades.especialidades_models import Especialidades

class Temas(models.Model):
    specialty = models.ForeignKey(Especialidades, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'trs_temas'

    def __str__(self) -> str:
        return self.name