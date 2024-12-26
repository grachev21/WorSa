# myapp/management/commands/populate_db.py

# Импортируем базовый класс для создания команд управления Django
from django.core.management.base import BaseCommand

# Импортируем модель, которую будем использовать для заполнения базы данных
from config.core.models import WordsList


# Определяем класс команды, наследуя его от BaseCommand
class Command(BaseCommand):
    # Описание команды, которое будет отображаться при вызове help
    help = 'Populate the database with initial data'

    # Метод handle вызывается при выполнении команды
    def handle(self, *args, **kwargs):
        # Выводим сообщение о начале заполнения базы данных
        self.stdout.write(self.style.SUCCESS('Starting to populate the database...'))

        # Пример данных для заполнения базы данных
        data = [
            {'name': 'Item 1', 'description': 'Description for Item 1'},
            {'name': 'Item 2', 'description': 'Description for Item 2'},
            {'name': 'Item 3', 'description': 'Description for Item 3'},
        ]

        # Проходим по каждому элементу в списке данных
        for item in data:
            # Создаем новую запись в базе данных с использованием модели MyModel
            WordsList.objects.create(name=item['name'], description=item['description'])

        # Выводим сообщение об успешном заполнении базы данных
        self.stdout.write(self.style.SUCCESS('Database populated successfully!'))
