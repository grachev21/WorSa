import subprocess
import tqdm
import json
import time
import enchant
from colorama import init
from colorama import Fore


class GetList:

    def get_list(self):
        list_word = set()
        dictionary = enchant.Dict("en_US")

        while True:
            try:
                print()
                link = input(f'{Fore.BLUE}Укажите путь до текстового файла или {Fore.RED}b{Fore.BLUE} чтобы выйте: {Fore.GREEN}')

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
        name_dict = str(input('Введите название словаря: '))
        subprocess.run('clear', shell=True)

        print(f'{Fore.RED}Згрузка данных')
        print()

        for lw in tqdm.tqdm(list_word):
            result = subprocess.run(f'trans -b en:ru {lw}', shell=True, stdout=subprocess.PIPE)
            result_out = result.stdout.decode('utf-8').rstrip()

            to_json = {
                'en_word': lw,
                'ru_word': result_out
            }

            with open(f'{name_dict}.json', 'a') as f:
                json.dump(to_json, f, sort_keys=True, indent=2, ensure_ascii=False)
