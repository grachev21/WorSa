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
        number_word = int(input(f'{Fore.GREEN} Введите количество слов в день: {Fore.RED}'))
        number_loop = int(input(f'{Fore.GREEN} Введите количество повторов при наборе текста: {Fore.RED}'))

        value_word = {'number_word': number_word}
        value_loop = {'number_loop': number_loop}

        record_read('settings', value_word, 'record')
        record_read('loop', value_loop, 'record')

