import os

from django.conf import settings

BASE_DIR = settings.BASE_DIR


class ReadFile:
    def __init__(self):
        self.path = os.path.join(
            BASE_DIR, "core", "management", "commands", "dbWords", "words.txt"
        )
        self.dictionary = self.readTxt()

    def readTxt(self):
        dictionary = []
        with open(self.path, "r", encoding="utf-8") as file:
            lines = file.readlines()
            for line in lines:
                dictionary.append(line.strip().split())
        return dictionary

    def createDict(self):
        outDictionary = []
        for d in self.dictionary:
            outDictionary.append({"en": d[0], "ru": d[1]})
        return outDictionary
