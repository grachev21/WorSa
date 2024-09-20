from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    avatar = models.ImageField(upload_to='users_images', blank=True, null=True, help_text='Загрузить фото', verbose_name='Аватар')
    email = models.EmailField(help_text='Укажите вашь Email.', null=True, verbose_name='email')
    first_name = models.CharField(help_text='Укажите ваше имя.', null=True, max_length=200)
    last_name = models.CharField(help_text='Укажите вашу фамилию.', null=True, max_length=200)
    date_creation = models.DateField() 