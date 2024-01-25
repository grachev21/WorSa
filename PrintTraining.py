import json
import subprocess
from colorama import init
from colorama import Fore
from SoundText import sound
from record_read import record_read

init()


class PrintTraining:

    def __init__(self, en_word, ru_word, count_words):
        self.en_word = en_word
        self.ru_word = ru_word
        self.count_words = count_words

    def training(self):

        while True:
            subprocess.run('clear', shell=True)

            sound(self.en_word)

            print(Fore.GREEN + 'Введите слово --> ', Fore.YELLOW + str(self.en_word))
            print()
            try:
                check_en = str(input(f'{Fore.RED} --> : {Fore.RED}'))
                if check_en != self.en_word:
                    continue
                print()
                print(Fore.GREEN + 'Введите слово --> ', Fore.YELLOW + str(self.ru_word))
                print()
            except:
                continue
            try:
                check_ru = str(input(f'{Fore.RED} --> : {Fore.RED}'))
                if check_ru != self.ru_word:
                    continue
                else:
                    for cw in self.count_words:
                        loop = record_read('loop', None, 'read')['number_loop']
                        
                        if cw['en_word'] == self.en_word and cw['status'] != loop:
                            cw['status'] += 1
                            if cw['status'] == loop:
                                self.count_words.remove(cw)

                                with open('./file_json/gussed_words.json', 'r') as file:
                                    gussed_words = json.load(file)

                                gussed_words.append(cw)

                                with open('./file_json/gussed_words.json', 'w') as file:
                                    json.dump(gussed_words, file, sort_keys=True, indent=2, ensure_ascii=False)

                        with open('./file_json/count_words.json', 'w') as file:
                            json.dump(self.count_words, file, sort_keys=True, indent=2, ensure_ascii=False)
                    break
            except:
                continue
