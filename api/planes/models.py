from django.db import models

# Create your models here.
class Plan(models.Model):
    name = models.CharField(max_length=120)
    description = models.CharField(max_length=255)
    price = models.IntegerField(default=1)
    image = models.CharField(max_length=1000)

    def __str__(self):
        return self.name
    def __str__(self):
        return self.description
    def __str__(self):
        return self.image
    def contratarLineas(self, numeroLineas):
        return self.price * numeroLineas