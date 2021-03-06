from django.db import models
from django.contrib.auth.models import User




class Lead(models.Model):
    # name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    role = models.CharField(max_length=50, null=True)
    message = models.CharField(max_length=600, blank=True)
    # document = models.FileField(null=True)
    owner = models.ForeignKey(User, related_name="leads", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
      


