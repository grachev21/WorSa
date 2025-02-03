from rest_framework import generics, viewsets, mixins
from rest_framework.views import APIView
# from rest_framework.viewsets import GenericViewSet
from rest_framework.decorators import action
from rest_framework import status
from rest_framework.response import Response
# from rest_framework.permissions import    
from rest_framework.pagination import PageNumberPagination

from core.models import WordsList, Categories, Settings
from .serializers import WordsListSerializer, SettingsSerializer
from .services import SettingsService

from .permissions import IsOwnerAndAuthenticated


class AppAPIListPagination(PageNumberPagination):
    page_size = 50
    # page_size_query_param = 'page_size'
    # max_page_size = 10000

class SettingsSet(viewsets.ModelViewSet):
    queryset = Settings.objects.all()
    serializer_class = SettingsSerializer
    permission_classes = [IsOwnerAndAuthenticated]
    # permission_classes = [CustomPermissionSettings]

    def get_queryset(self):
        return Settings.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        # Устанавливаем поле user текущим пользователем при создании объекта
        serializer.save(user=self.request.user)
    
    # def list(self, request, *args, **kwargs):
    #     db = Settings.objects.select_related('user').filter(user=request.user)
    #     serializer = SettingsSerializer(db, many=True)
    #     if request.user.is_authenticated:
    #         return Response(serializer.data)
    #     else:
    #         return Response({"message": "User is anonymous"}, status=200)
    
    # @action(detail=True, methods=['get'])
    # def settings(self, request, *args, **kwargs):
    #     db = Settings.objects.select_related('user').filter(user=request.user)
    #     serializer = SettingsSerializer(db, many=True)
    #     if request.user.is_authenticated:
    #         return Response(serializer.data)
    #     else:
    #         return Response({"message": "User is anonymous"}, status=200)


# class SettingsSet(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request, *args, **kwargs):
#         db = Settings.objects.select_related('user').filter(user=request.user)
#         serializer = SettingsSerializer(db, many=True)
#         if request.user.is_authenticated:
#             return Response(serializer.data)
#         else:
#             return Response({"message": "User is anonymous"}, status=200)

#     def post(self, request, *args, **kwargs):
#         data = request.data  # Получаем данные из запроса
#         data['user'] = request.user.id  # Добавляем текущего пользователя в данные
#         serializer = SettingsSerializer(data=data)  # Создаем экземпляр сериализатора с обновленными данными
#         if serializer.is_valid():  # Проверяем валидность данных
#             serializer.save()  # Сохраняем данные в базу данных, если они валидны
#             return Response(serializer.data, status=status.HTTP_201_CREATED)  # Возвращаем ответ с данными и статусом 201 Created
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Возвращаем ошибки валидации и статус 400 Bad Request, если данные невалидны


class WordsListSet(viewsets.ModelViewSet):
    # permission_classes = (IsAdminOrReadOnly,)
    queryset = WordsList.objects.all()
    serializer_class = WordsListSerializer
    pagination_class = AppAPIListPagination

