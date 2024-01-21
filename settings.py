import json
from record_read import record_read
from colorama import init
from colorama import Fore

# colorama
init()

class Settings:

    def settings(self):
        print(Fore.WHITE + '*' * 80)
        print()
        number_word = int(input('Введите количество слов в день: '))
        number_loop = int(input('Введите количество повторов при наборе текста: '))

        value_word = {'number_word': number_word}
        value_loop = {'number_loop': number_loop}

        record_read('settings', value_word, 'record')
        record_read('loop', value_loop, 'record')

