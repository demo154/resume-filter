
from rest_framework import routers
from .api import FileViewSet

router = routers.DefaultRouter()
router.register('api/files',FileViewSet,'files')
urlpatterns =  router.urls

