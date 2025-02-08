from django.db import models
from users.models import CustomUser

class Categories(models.Model):
    letter = models.CharField(max_length=200)

    def __str__(self):
        return str(self.letter)


class WordsList(models.Model):
    en = models.CharField(max_length=200)
    ru = models.CharField(max_length=200)
    timeCreate = models.DateTimeField(auto_now_add=True)
    timeUpdate = models.DateTimeField(auto_now=True)
    audio = models.FileField(upload_to="audio/")
    categories = models.ForeignKey(Categories, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.en)


class UserWordsList(models.Model):
    name = models.CharField(max_length=200)
    en = models.CharField(max_length=200)
    ru = models.CharField(max_length=200)
    timeCreate = models.DateTimeField(auto_now_add=True)
    timeUpdate = models.DateTimeField(auto_now=True)
    audio = models.FileField(upload_to="audio/")
    teached = models.BooleanField(default=False)
    repeated = models.BooleanField(default=False)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)


class Settings(models.Model):
    numberWordsDay = models.IntegerField()
    amountInputText = models.IntegerField()
    numberOptionsGuessing = models.IntegerField()
    voiceoverWords = models.BooleanField()
    voiceSpead = models.BooleanField()
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

class Graphs(models.Model):
    day = models.JSONField()
    week = models.JSONField()
    month = models.JSONField()
    year = models.JSONField()
    All = models.JSONField()
