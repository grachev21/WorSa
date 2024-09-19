from django.db import models
from django.conf import settings


class DarkTheme(models.Model):
    theme = models.BooleanField(verbose_name='Включить темную тему.')
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

class StoryWords(models.Model):
    ru = models.CharField(null=True, max_length=200)
    en = models.CharField(null=True, max_length=200, )
    transcription = models.CharField(null=True, max_length=200)
    offer = models.TextField(null=True)
    

class UserWordsStory(models.Model):
    ru = models.CharField(null=True, max_length=200)
    en = models.CharField(null=True, max_length=200)
    transcription = models.CharField(null=True, max_length=200)
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)