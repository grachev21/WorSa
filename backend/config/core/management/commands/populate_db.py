import os

from core.models import Categories, WordsList
from django.conf import settings
from django.core.files import File
from django.core.management.base import BaseCommand

from .tools_db import ReadFile


class Command(BaseCommand):
    help = "Populate the DB"

    def handle(self, *args, **options):
        self.dictionary = ReadFile().createDict()
        self.alphabet = list("abcdefghijklmnopqrstuvwxyz")

        for caseAlphabet in self.alphabet:
            if not Categories.objects.filter(letter=caseAlphabet).exists():
                print(f"There is no such record: {caseAlphabet}")
                Categories.objects.create(letter=caseAlphabet)
            else:
                print(f"There is such a record: {caseAlphabet}")

        for caseDictionary in self.dictionary:

            pathAudio = os.path.join(settings.MEDIA_ROOT, "audio", f"{caseDictionary['en']}.mp3")
            pathAudioSlow = os.path.join(settings.MEDIA_ROOT, "audio", f"{caseDictionary['en']} slow.mp3")

            print(pathAudio)
            print(pathAudioSlow)
            if caseDictionary["en"][0] in self.alphabet:
                cat = Categories.objects.get(letter=caseDictionary["en"][0])
                WordsList.objects.create(
                    en=caseDictionary["en"],
                    ru=caseDictionary["ru"],
                    audio=pathAudio,
                    audioSlow=pathAudioSlow,
                    categories=cat,
                )

        self.stdout.write(self.style.SUCCESS("Successfully populated the database"))
