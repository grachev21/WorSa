import enchant
from record_read import record_read


class ClearWords:

    def __init__(self, word):
        self.word = word.lower()

    def clear_sufix(self, check, sufix):

        dictionary = enchant.Dict("en_US")
        gussed_words = record_read("gussed_words", None, "read")

        if dictionary.check(self.word) and self.word.isalpha():
            if len(self.word) > 2:
                if self.word not in [gu['en_word'] for gu in gussed_words]:
                    return self.word
