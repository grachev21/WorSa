import os

from core.models import Categories, WordsList
from django.conf import settings
from django.core.management.base import BaseCommand
from django.core.files import File

from .tools_db import ReadFile

# Основная команда
class Command(BaseCommand):
    help = "Populate the DB"

    def handle(self, *args, **options):
        self.dictionary = ReadFile().createDict()
        self.alphabet = list("abcdefghijklmnopqrstuvwxyz")

        # Создание категорий
        for caseAlphabet in self.alphabet:
            if not Categories.objects.filter(letter=caseAlphabet).exists():
                print(f"There is no such record: {caseAlphabet}")
                Categories.objects.create(letter=caseAlphabet)
            else:
                print(f"There is such a record: {caseAlphabet}")

        # Обработка словаря
        for caseDictionary in self.dictionary:
            # Относительные пути для аудио
            relative_path_audio = os.path.join("audio", f"{caseDictionary['en']}.mp3")
            relative_path_audio_slow = os.path.join("audio", f"{caseDictionary['en']} slow.mp3")

            absolute_path_audio = os.path.join(settings.MEDIA_ROOT, relative_path_audio)
            absolute_path_audio_slow = os.path.join(settings.MEDIA_ROOT, relative_path_audio_slow)

            print(f"Audio Path: {absolute_path_audio}")
            print(f"Slow Audio Path: {absolute_path_audio_slow}")

            if caseDictionary["en"][0] in self.alphabet:
                cat = Categories.objects.get(letter=caseDictionary["en"][0])

                # Проверяем существование файлов перед созданием записи
                if os.path.exists(absolute_path_audio) and os.path.exists(absolute_path_audio_slow):
                    # Сохраняем записи в базу данных с относительными путями
                    WordsList.objects.create(
                        en=caseDictionary["en"],
                        ru=caseDictionary["ru"],
                        audio=relative_path_audio,  # Сохраняем относительный путь
                        audioSlow=relative_path_audio_slow,  # Сохраняем относительный путь
                        categories=cat,
                    )
                else:
                    print(f"Audio files not found for {caseDictionary['en']}")
        
        self.stdout.write(self.style.SUCCESS("Successfully populated the database"))
