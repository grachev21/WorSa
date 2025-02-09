from rest_framework import generics, viewsets, mixins
from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework import status
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

from core.models import WordsList, Settings, UserWordsList
from .serializers import WordsListSerializer, SettingsSerializer, CreateWordListSerializer, ShowUserWordsListSerializer

from .permissions import IsOwnerAndAuthenticated
from .services import create_dict, cleaning_duplicates


class AppAPIListPagination(PageNumberPagination):
    page_size = 3
    # max_page_size = 100

class SettingsSet(viewsets.ModelViewSet):
    queryset = Settings.objects.all()
    serializer_class = SettingsSerializer
    permission_classes = [IsOwnerAndAuthenticated]

    def get_queryset(self):
        return Settings.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    def create(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if queryset.exists():
            settings = queryset.first()
            serializer = self.get_serializer(settings, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save(user=self.request.user)
            return Response(serializer.data)
        else:
            return Response({"detail": "Settings record does not exist."},
                            status=status.HTTP_400_BAD_REQUEST)
    
# class UserWordsListSet(viewsets.ModelViewSet):
#     queryset = UserWordsList.objects.all()
#     serializer_class = UserWordsListSerializer
#     permission_classes = [IsOwnerAndAuthenticated]

#     def get_queryset(self):
#         return UserWordsList.objects.filter(user=self.request.user)

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)

#     def create(self, request, *args, **kwargs):
#         print(self.get_queryset())


class CreateWordListSet(viewsets.ViewSet):
    permission_classes = [IsOwnerAndAuthenticated]
    def create(self, request, *args, **kwargs):
            
            serializer = CreateWordListSerializer(data=request.data)

            # Проверка валидности данных
            if serializer.is_valid():
                create_dict(serializer.data, request.user)
                cleaning_duplicates(request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            
            # Возвращение ошибок в случае невалидных данных
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ShowUserWordsListSet(viewsets.ModelViewSet):
    queryset = UserWordsList.objects.all()
    serializer_class = ShowUserWordsListSerializer
    permission_classes = [IsOwnerAndAuthenticated]
    pagination_class = AppAPIListPagination

    def get_queryset(self):
        return UserWordsList.objects.filter(user=self.request.user)





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

