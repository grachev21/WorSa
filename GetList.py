import subprocess
import json
import time
import enchant
from progress.bar import IncrementalBar
from colorama import init
from colorama import Fore

init()

class GetList:

    def get_list(self):
        list_word = set()
        dictionary = enchant.Dict('en_US')

        while True:
            try:
                print()
                link = input(f'{Fore.BLUE}Укажите путь до текстового файла или {Fore.RED}b{Fore.BLUE} чтобы выйте: {Fore.RED}')

                if link == 'b':
                    check = 'back'
                    return check

                else:
                    text_file = open(link, 'r')
                    value = str(text_file.readlines()).split()
                    text_file.close()
                    break
            except:
                subprocess.run('clear', shell=True)
                print(f'{Fore.RED}Нет такого пути')
                time.sleep(1)
                subprocess.run('clear', shell=True)

        for vu in value:
            vu = vu.lower()
            if len(vu) > 2 and str(vu).isalpha() and vu[-1] != 's' and dictionary.check(vu):
                list_word.add(vu)

        return list_word

    def parsing_terminal(self, list_word):

        subprocess.run('clear', shell=True)

        
        list_to_json = []

        bar = IncrementalBar('Создание словаря', max = len(list_word))

        print(f'{Fore.RESET}Згрузка данных')
        for lw in list_word:
            bar.next()
            
            result = subprocess.run(f'trans -b en:ru {lw}', shell=True, stdout=subprocess.PIPE)
            result_out = result.stdout.decode('utf-8').rstrip()

            if type(result_out) == str:
                to_json = {
                    'en_word': lw,
                    'ru_word': result_out
                }

                list_to_json.append(to_json)

            # if len(list_to_json) == 20:
            #     break

        with open('file_json/my_dict.json', 'w') as f:
            json.dump(list_to_json, f, sort_keys=True, indent=2, ensure_ascii=False)
