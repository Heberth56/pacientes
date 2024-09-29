from django.db import models

class Especialidades(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'trs_especialidades'

    def __str__(self) -> str:
        return self.name