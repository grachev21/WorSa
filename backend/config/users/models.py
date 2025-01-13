from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    name = models.CharField(max_length=200, verbose_name="Имя")
    avatar = models.ImageField(upload_to="photos", verbose_name="аватар")
