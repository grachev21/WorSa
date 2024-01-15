import subprocess
from colorama import init
from colorama import Fore

# colorama
init()

class Menu:

    def StartMenu(self):
        check = True
        while check:
            print(Fore.RED + '\t1 - Создать словарь')
            print(Fore.RED + '\t2 - Начать заново')
            print(Fore.YELLOW + '\t3 - Продолжить обучение')
            print(Fore.GREEN + '\t4 - Количество слов в день')
            print(Fore.LIGHTBLUE_EX + '\t5 - Выбрать готовый словарь')
            print(Fore.RED+ '\t6 - Выход')
            print()
            try:
                value = int(input(f'{Fore.WHITE}\tВыберите вариант и нажмите Enter: {Fore.GREEN}'))
                if value > 6:
                    subprocess.run('clear', shell=True)
                else:
                    check = False
                    return value
            except:
                subprocess.run('clear', shell=True)

