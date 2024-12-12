from django.db import models
# from users.models import CustomUser

class WordsList(models.Model):
    en = models.CharField(max_length=200)
    ru = models.CharField(max_length=200)

class UserWordsList(models.Model):
    en = models.CharField(max_length=200)
    ru = models.CharField(max_length=200)
    repetitions = models.IntegerField(verbose_name="количество повторов")
    geeks_field = models.BooleanField(verbose_name="знаю или нет")
    # user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    
    
class Settings(models.Model):
    numberWordsDay = models.IntegerField(verbose_name="количество слов в день")
    amountInputText = models.ImageField(verbose_name="количество ввода текста")
    # user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    
    