from django.core.files import File
from django.core.management.base import BaseCommand
from core.models import WordsList, Categories
from pathlib import Path
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class ReadFile:
    def __init__(self):
        self.path = os.path.join(BASE_DIR, 'dbWords', 'words.txt')
        self.dictionary = self.readTxt()

    def readTxt(self):
        dictionary = []
        with open(self.path, 'r', encoding='utf-8') as file:
            lines = file.readlines()
            for line in lines:
                dictionary.append(line.strip().split())
        return dictionary

    def createDict(self):
        outDictionary = []
        for d in self.dictionary:
            outDictionary.append({'en': d[0], 'ru': d[1]})
        return outDictionary


class Command(BaseCommand):
    help = 'Populate the DB'

    def handle(self, *args, **options):
        self.dictionary = ReadFile().createDict()
        self.alphabet = list('abcdefghijklmnopqrstuvwxyz')

        for caseAlphabet in self.alphabet:
            if not Categories.objects.filter(letter=caseAlphabet).exists():
                print(f'There is no such record: {caseAlphabet}')
                Categories.objects.create(letter=caseAlphabet)
            else:
                print(f'There is such a record: {caseAlphabet}')


        for caseDictionary in self.dictionary:
            path_audio = os.path.join(BASE_DIR, 'dbWords', 'audio', f"{caseDictionary['en']}.mp3")
            path_audio_slow = os.path.join(BASE_DIR, 'dbWords', 'audio', f"{caseDictionary['en']} slow.mp3")

            if caseDictionary['en'][0] in self.alphabet:
                cat = Categories.objects.get(letter=caseDictionary['en'][0])

                with open(path_audio, 'rb') as audio_file, open(path_audio_slow, 'rb') as audio_slow_file:
                    audio_file_wrapper = File(audio_file)
                    audio_slow_file_wrapper = File(audio_slow_file)
                    print(audio_file_wrapper)
                    print(audio_slow_file_wrapper)
                    exit()

                    WordsList.objects.create(
                        en=caseDictionary['en'],
                        ru=caseDictionary['ru'],
                        audio=audio_file_wrapper,
                        audioSlow=audio_slow_file_wrapper,
                        categories=cat
                    )

        self.stdout.write(self.style.SUCCESS('Successfully populated the database'))
