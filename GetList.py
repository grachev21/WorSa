import subprocess
import json
import time
from progress.bar import IncrementalBar
from colorama import init
from colorama import Fore
from ClearWords import ClearWords

init()


class GetList:

    def get_list(self):
        list_word = set()

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
            word = ClearWords(vu)
            date_word = str(word.clear_sufix())
            list_word.add(date_word)

        return list_word

    def parsing_terminal(self, list_word):

        subprocess.run('clear', shell=True)

        list_to_json = []

        bar = IncrementalBar('Создание словаря', max=len(list_word))

        print(f'{Fore.RESET}Згрузка данных')
        for lw in list_word:
            subprocess.run('clear', shell=True)
            bar.next()
            if lw != '':

                result = subprocess.run(f'trans -b en:ru {lw}', shell=True, stdout=subprocess.PIPE)
                result_out = result.stdout.decode('utf-8').rstrip().lower()

                to_json = {
                    'en_word': lw,
                    'ru_word': result_out
                }

                list_to_json.append(to_json)


        with open('file_json/my_dict.json', 'w') as f:
            json.dump(list_to_json, f, sort_keys=True, indent=2, ensure_ascii=False)
