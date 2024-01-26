import enchant


dictionary = enchant.Dict('en_US')

class ClearWords:

    def __init__(self, word, sufix):
        self.word = word
        self.sufix = ["s", "es", "ies", "ed", "ied", "d", "t", "ing"] 

    def clear_sufix(self):
        
        for sufix in self.sufix:
            if self.word.endswith(sufix):
                word = self.word[:-len(sufix)]
                break
        
        if dictionary.check(word):
            print(word)
            return word
        
        if self.word == word:
            print(word)
            return self.word