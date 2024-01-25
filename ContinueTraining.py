import os
import random
import subprocess
from colorama import init
from colorama import Fore
from prettytable import PrettyTable
from record_read import record_read
from CountPrint import count_print
from LoadPrint import load


init()

class ContinueTraining:
    def create_lists(self):
        if not os.path.isfile('./file_json/gussed_words.json'):
            self.record_read('gussed_words', [], 'record')

        if not os.path.isfile('./file_json/count_words.json'):
            self.record_read('count_words', [], 'record')

    def count_words(self):
        number_word = record_read('settings', None, 'read')['number_word']
        my_dict = record_read('my_dict', None, 'read')
        count_words = record_read('count_words', None, 'read')

        word_list = []
        number = 1
        if len(count_words) == 0:
            while len(word_list) != number_word:
                number += 1
                if my_dict[number]['en_word'] not in [gw['en_word'] for gw in record_read('gussed_words', None, 'read')]:
                    append_dict = my_dict[number]
                    append_dict['status'] = 0
                    word_list.append(append_dict)
            record_read('count_words', word_list, 'record')
            return word_list
        else:
            return count_words

    def random_list_and_true_word(self):
        if len(record_read('count_words', None, 'read')) != 0:

            right_word = random.sample(record_read('count_words', None, 'read'), 1)[0]
            my_dict = record_read('my_dict', None, 'read')
            without_right_word = [md for md in my_dict if md['en_word'] != right_word['en_word']]
            random_word = random.sample(without_right_word, 8)
            return (right_word, random_word)
        else:
            return 'exit'

    def tests(self, right_word, random_word):
        list_test = random.sample([rw['en_word'] for rw in random_word] + [right_word['en_word']], 9)
        subprocess.run('clear', shell=True)
        print(Fore.WHITE + '*' * 80)
        print(Fore.RED + 'Всего слов: '+ Fore.CYAN, len(record_read('my_dict', None, 'read')))
        print(Fore.RED + 'Выучено: '+ Fore.CYAN, len(record_read('gussed_words', None, 'read')))
        print(Fore.RED + 'Осталось за день: '+ Fore.CYAN, len(record_read('count_words', None, 'read')))
        print(Fore.RED + 'Настройки слов: '+ Fore.CYAN, (record_read('settings', None, 'read')['number_word']))
        print(Fore.RED + 'Количество повторов набора текста: '+ Fore.CYAN, (record_read('loop', None, 'read')['number_loop']))
        print(Fore.RED + 'Осталось выучить: '+ Fore.CYAN, len(record_read('my_dict', None, 'read')) - len(record_read('gussed_words', None, 'read')))
        print(Fore.LIGHTYELLOW_EX)
        load()
        print()
        print(Fore.RESET + '*' * 80)
        print()
        print(Fore.YELLOW + "Чтобы выйти введите '0'\n\n")
        print(f"{Fore.LIGHTYELLOW_EX}--> {Fore.GREEN} [{right_word['ru_word']}]")
        print()
        mytable = PrettyTable()
        mytable.header = False
        mytable.align = 'l'

        mytable.add_row([Fore.RED+'1'+Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[0]}{Fore.GREEN}', 
                         Fore.RED+'2'+Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[1]}{Fore.GREEN}',
                         Fore.RED+'3'+Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[2]}{Fore.GREEN}',])
        mytable.add_row([Fore.RED+'4'+Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[3]}{Fore.GREEN}', 
                         Fore.RED+'5'+Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[4]}{Fore.GREEN}',
                         Fore.RED+'6'+Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[5]}{Fore.GREEN}',])
        mytable.add_row([Fore.RED+'7'+Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[6]}{Fore.GREEN}', 
                         Fore.RED+'8'+Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[7]}{Fore.GREEN}',
                         Fore.RED+'9'+Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[8]}{Fore.GREEN}',])

        print(mytable)
        print()
        try:
            result_user = int(input(Fore.LIGHTBLUE_EX + f'\nВыберите вариант:  {Fore.RED}'))
            if result_user == 0:
                return 'exit'
            if list_test[result_user - 1] == right_word['en_word']:
                return 'right'
            else:
                subprocess.run('clear', shell=True)
                print(Fore.RED + '*' * 80)
                print()
                print(Fore.RED + 'ВАШ ОТВЕТ НЕ ВЕРНЫЙ!!!')
                print()
                print(Fore.LIGHTYELLOW_EX + 'Правильное слово: ', Fore.WHITE + right_word['en_word'])
                print()
                input(Fore.LIGHTGREEN_EX + f'Нажмите Enter чтобы продолжить: {Fore.RED}')
        except:
            subprocess.run('clear', shell=True)
            print(Fore.RED + 'Вы можете ввести только 1, 2, 3 или 4')
            print()
            input(Fore.GREEN + 'Нажмите Enter чтобы продолжить')