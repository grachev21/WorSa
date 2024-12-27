import os
from django.core.files import File
from django.core.management.base import BaseCommand
from core.models import WordsList, Categories


class ReadFile:
    def __init__(self):
        self.path = '/home/grachev/Desktop/Translate/dbWords/words.txt'
        self.dictionary = self.readTxt()

    def readTxt(self):
        dictionary = []
        count = 0
        with open(self.path, 'r', encoding='utf-8') as file:
            lines = file.readlines()
            for l in lines:
                dictionary.append(l.strip().split())
                count += 1
        return dictionary

    def createDict(self):
        outDictionary = []
        for d in self.dictionary:
            outDictionary.append({'en': d[0], 'ru': d[1]})
        return outDictionary


class Command(BaseCommand):
    help = 'Populate the DB'

    def __init__(self):
        self.dictionary = ReadFile().createDict()
        self.alphabet = list('abcdefghijklmnopqrstuvwxyz')
        self.pathAudio = '/home/grachev/Desktop/Translate/dbWords/audio/'

    def handle(self, *args, **options):
        for caseAlphabet in self.alphabet:
            print(caseAlphabet)
            Categories.objects.create(
                letter=caseAlphabet
            )
        for caseDictionary in self.dictionary:
            cat = Categories.objects.get(letter=caseDictionary['en'][0])
            audio = open(f'{self.pathAudio}{caseDictionary['en']}.mp3', 'rb')
            audioSlow = open(f'{self.pathAudio}{
                             caseDictionary['en']} slow.mp3', 'rb')
            audioFile = File(audio)
            audioFileSlow = File(audioSlow)
            WordsList.objects.create(
                en=caseDictionary['en'],
                ru=caseDictionary['ru'],
                audio=audioFile,
                audioSlow=audioFileSlow,
                categories=cat
            )
            audio.close()
            audioSlow.close()
        self.stdout.write(self.style.SUCCESS(
            'Successfully populated the database'))
