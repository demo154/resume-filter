# # from django.shortcuts import render
# # from .models import Image
# # from .forms import ImageUpload
# # from . import templates
# # # Create your views here.
# # def image_upload(request):
# #     images = Image.objects.all()
# #     if request.method == 'POST':
# #         form = ImageUpload(request.POST, request.FILES)
# #         if form.is_valid():
# #             form.save()
# #             return render(request,'base.html',{'form': form})
# #     else:
# #         form = ImageUpload()
# #     return render(request, 'index.html', {'form': form})const body = JSON.stringify({ username, password });
# from rest_framework.parsers import FileUploadParser,MultiPartParser,FormParser
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework import status
# from .models import File

# from .serializers import FileSerializer


# class FileView(APIView):
#     parser_classes = (MultiPartParser, FormParser)

#     def get(self, request, *args, **kwargs):
#         files = File.objects.all()
#         serializer = FileSerializer(files, many=True)
#         return Response(serializer.data)

#     def file(self, request, *args, **kwargs):
#         files_serializer = FileSerializer(data=request.data)
#         if files_serializer.is_valid():
#             files_serializer.save()
#             return Response(files_serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             print('error', files_serializer.errors)
#             return Response(files_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

