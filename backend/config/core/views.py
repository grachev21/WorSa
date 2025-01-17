from rest_framework import generics, viewsets, mixins
from rest_framework.views import APIView
# from rest_framework.viewsets import GenericViewSet
# from rest_framework.decorators import action
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from rest_framework.pagination import PageNumberPagination

from core.models import WordsList, Categories, Settings
from .serializers import WordsListSerializer, SettingsSerializer

from .permissions import IsAdminOrReadOnly

class AppAPIListPagination(PageNumberPagination):
    page_size = 50
    # page_size_query_param = 'page_size'
    # max_page_size = 10000

class SettingsSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Settings.objects.all()
    serializer_class = SettingsSerializer

class WordsListSet(viewsets.ModelViewSet):
    permission_classes = (IsAdminOrReadOnly,)
    queryset = WordsList.objects.all()
    serializer_class = WordsListSerializer
    pagination_class = AppAPIListPagination

