from rest_framework import generics, viewsets, mixins
# from rest_framework.viewsets import GenericViewSet
# from rest_framework.decorators import action
# from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser

from core.models import WordsList, Categories, Settings
from .serializers import WordsListSerializer, SettingsSerializer

from .permissions import IsAdminOrReadOnly

class SettingsSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Settings.objects.all()
    serializer_class = SettingsSerializer

class WordsListSet(viewsets.ModelViewSet):
    permission_classes = (IsAdminOrReadOnly,)
    queryset = WordsList.objects.all()
    serializer_class = WordsListSerializer
