from rest_framework import serializers
from files.models import File


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = '__all__'
        # def save(self):
        #     document = super(File, self,content_type="application/pdf").save()
        #     return document