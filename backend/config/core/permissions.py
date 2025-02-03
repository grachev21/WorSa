from rest_framework.permissions import BasePermission 

class IsOwnerAndAuthenticated(BasePermission):
    """
    Разрешение, которое позволяет доступ только аутентифицированным пользователям, которые являются владельцами данных.
    """

    def has_permission(self, request, view):
        # Проверка, что пользователь аутентифицирован
        return request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        # Проверка, что пользователь является владельцем объекта
        return obj.user == request.user