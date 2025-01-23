from rest_framework import generics, viewsets, mixins
from rest_framework.views import APIView
# from rest_framework.viewsets import GenericViewSet
from rest_framework.decorators import action
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser, IsAuthenticated
from rest_framework.pagination import PageNumberPagination

from core.models import WordsList, Categories, Settings
from .serializers import WordsListSerializer, SettingsSerializer
from .services import SettingsService

from .permissions import IsAdminOrReadOnly

class AppAPIListPagination(PageNumberPagination):
    page_size = 50
    # page_size_query_param = 'page_size'
    # max_page_size = 10000

class SettingsSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Settings.objects.all()
    serializer_class = SettingsSerializer
    
    # @action(detail=False, methods=['get'])
    # def check_authentication(self, request, *args, **kwargs):
    #     if request.user.is_authenticated:
    #         SettingsService.set_default()
    #         return Response({"message": "User is authenticated"})
    #     else:
    #         return Response({"message": "User is anonymous"}, status=401)


    # def list(self, request, *args, **kwargs):
    #     print(request.user)
    #     if request.user.is_authenticated:
    #         settings = SettingsService.set_default()
    #         serializer = SettingsSerializer(settings, many=True)
    #         return Response(serializer.data)
    #     else:
    #         return Response({"message": "User is anonymous"}, status=200)

        

# class SettingsSet(APIView):
#     def get(self, request, *args, **kwargs):
#         db = Settings.objects.all()
#         serializer = SettingsSerializer(db, many=True)
#         return Response(serializer.data)

class WordsListSet(viewsets.ModelViewSet):
    permission_classes = (IsAdminOrReadOnly,)
    queryset = WordsList.objects.all()
    serializer_class = WordsListSerializer
    pagination_class = AppAPIListPagination

