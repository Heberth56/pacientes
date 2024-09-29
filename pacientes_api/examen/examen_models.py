from django.db import models
from ..usuarios.usuarios_models import CustomUser
from ..pacientes.pacientes_models import Pacientes
from ..temas.temas_models import Temas
class Examen(models.Model):    
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    patient = models.ForeignKey(Pacientes, on_delete=models.CASCADE)
    temas = models.JSONField(blank=True, null=True)
    diagnostic = models.TextField(blank=True, null=True)
    crated_at = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'par_examen'

    def __str__(self) -> str:
        return f"{self.patient}-{self.crated_at}"
