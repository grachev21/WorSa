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
            print(Fore.LIGHTYELLOW_EX+ '2 - Сброс данных словаря')
            print(Fore.LIGHTBLUE_EX+ '3 - Тестирование')
            print(Fore.GREEN + '4 - Настройки')
            print(Fore.LIGHTCYAN_EX+ '5 - Выход')
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

