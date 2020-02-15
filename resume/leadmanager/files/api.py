from files.models import File
from rest_framework import viewsets, permissions
from .serializers import FileSerializer

#Lead Viewset
class FileViewSet(viewsets.ModelViewSet):
    queryset= File.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = FileSerializer    

    # def get_queryset(self):
    #     return self.request.user.files.all()    

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)

    
