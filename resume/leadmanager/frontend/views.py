from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')

# def upload(request):
#     return render(request,'frontend/upload.html')