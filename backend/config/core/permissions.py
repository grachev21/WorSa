from rest_framework import permissions

class CustomPermissionSettings(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        # Разрешить методы GET, HEAD, OPTIONS для всех пользователей
        if request.method in permissions.SAFE_METHODS:
            return True

        # Разрешить методы PUT, PATCH, DELETE только автору
        return obj.author == request.user
