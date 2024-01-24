import subprocess
import random
from colorama import init
from colorama import Fore
from prettytable import PrettyTable
from SoundText import sound
from record_read import record_read
# from PrintTraining import PrintTraining


init()


class RepeatWords:

    def get_gussed_words(self):
        return record_read('gussed_words', None, 'read')

    def repeat(self, gussed_words):

        subprocess.run('clear', shell=True)
        print(Fore.YELLOW + "Чтобы выйти введите '0'\n\n")
        print(f"{Fore.LIGHTYELLOW_EX}--> {Fore.GREEN} [{gussed_words['ru_word']}]" + '\n')

        without_word = [md['en_word'] for md in record_read('my_dict', None, 'read') if md['en_word'] != gussed_words['en_word']]

        list_test = random.sample(random.sample(without_word, 8) + [gussed_words['en_word']], 9)

        mytable = PrettyTable()
        mytable.header = False
        mytable.align = 'l'

        mytable.add_row([Fore.RED + '1' + Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[0]}{Fore.GREEN}',
                        Fore.RED + '2' + Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[1]}{Fore.GREEN}',
                        Fore.RED + '3' + Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[2]}{Fore.GREEN}',])
        mytable.add_row([Fore.RED + '4' + Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[3]}{Fore.GREEN}',
                        Fore.RED + '5' + Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[4]}{Fore.GREEN}',
                        Fore.RED + '6' + Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[5]}{Fore.GREEN}',])
        mytable.add_row([Fore.RED + '7' + Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[6]}{Fore.GREEN}',
                        Fore.RED + '8' + Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[7]}{Fore.GREEN}',
                        Fore.RED + '9' + Fore.GREEN, f'{Fore.LIGHTYELLOW_EX} > {Fore.WHITE}{list_test[8]}{Fore.GREEN}',])

        print(mytable)

        try:
            result_user = int(input(Fore.LIGHTBLUE_EX + f'\nВыберите вариант:  {Fore.RED}'))

            if result_user == 0:
                return ['exit']
            if list_test[result_user - 1] == gussed_words['en_word']:
                return ['guessed', gussed_words]
            else:
                subprocess.run('clear', shell=True)
                print(Fore.RED + '*' * 80 + '\n')
                print(Fore.RED + 'ВАШ ОТВЕТ НЕ ВЕРНЫЙ!!!' + '\n')
                print(Fore.LIGHTYELLOW_EX + 'Правильное слово: ', Fore.WHITE + gussed_words['en_word'] + '\n')
                input(Fore.LIGHTGREEN_EX + f'Нажмите Enter чтобы продолжить: {Fore.RED}')
                return ['not_guess']

            if gussed_words == record_read('gussed_words', None, 'read')[-1]:
                subprocess.run('clear', shell=True)
                print('Вы повторили все слова')
                input('hell')
                return ['exit']
        except ValueError:
            subprocess.run('clear', shell=True)
            print(Fore.RED + 'Вы можете ввести только 1, 2, 3 или 4' + '\n')
            input(Fore.GREEN + 'Нажмите Enter чтобы продолжить')
            return ['error']
        except KeyboardInterrupt:
            return ['error']

    def training(self, en_word, ru_word):

        while True:
            subprocess.run('clear', shell=True)

            sound(en_word)

            print(Fore.GREEN + 'Введите слово --> ', Fore.YELLOW + str(en_word) + '\n')

            try:
                check_en = input(f'{Fore.RED} --> : {Fore.RED}')
                if check_en != en_word:
                continue
                print('\n' + Fore.GREEN + 'Введите слово --> ', Fore.YELLOW + str(ru_word) + '\n')
            except:
                continue

            try:
                check_ru = input(f'{Fore.RED} --> : {Fore.RED}')
                if check_ru != ru_word:
                    continue
                else:
                    subprocess.run('clear', shell=True)
                    break
            except:
                continue


