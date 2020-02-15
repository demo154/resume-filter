from django.db import models
from django.contrib.auth.models import User
# from .validators import validate_file_extension
# Create your models here.
class File(models.Model):
    document = models.FileField( upload_to="media/",unique=True,)
    owner = models.ForeignKey(User, related_name="files", on_delete=models.CASCADE, null=True)
    uploaded_at =  models.DateTimeField(auto_now_add=True,null=True)
    def __str__(self):
        self.document.name