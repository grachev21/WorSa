# Используем официальный образ Python 3.9
FROM python:3.9-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED=1

# Устанавливаем рабочую директорию
WORKDIR /project

# Копируем файл requirements.txt
COPY requirements.txt /project/requirements.txt

# Устанавливаем зависимости Python
RUN pip install -r requirements.txt

# Копируем исходный код Django проекта
COPY . /project

# Открываем порт 8000
EXPOSE 8000

# Команда для запуска Django приложения
CMD ["python", "config/manage.py", "migrate"]
CMD ["python", "config/manage.py", "runserver", "0.0.0.0:8000"]

