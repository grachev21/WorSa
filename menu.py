import subprocess
from colorama import init
from colorama import Fore

# colorama
init()

class Menu:

    def StartMenu(self):
        check = True
        while check:
            print(Fore.RED + '1 - Создать словарь')
            print(Fore.RED + '2 - Сброс данных словаря')
            print(Fore.YELLOW + '3 - Продолжить обучение')
            print(Fore.GREEN + '4 - Настройки')
            print(Fore.LIGHTBLUE_EX + '5 - Выбрать готовый словарь')
            print(Fore.RED+ '6 - Выход')
            print()
            try:
                value = int(input(f'{Fore.WHITE}Выберите вариант и нажмите Enter: {Fore.GREEN}'))
                if value > 6:
                    subprocess.run('clear', shell=True)
                else:
                    check = False
                    return value
            except:
                subprocess.run('clear', shell=True)

