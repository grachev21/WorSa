# Generated by Django 4.2 on 2025-01-13 14:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('letter', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Graphs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.JSONField()),
                ('week', models.JSONField()),
                ('month', models.JSONField()),
                ('year', models.JSONField()),
                ('All', models.JSONField()),
            ],
        ),
        migrations.CreateModel(
            name='Settings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numberWordsDay', models.IntegerField()),
                ('amountInputText', models.IntegerField()),
                ('numberOptionsGuessing', models.IntegerField()),
                ('voiceoverWords', models.BooleanField()),
                ('voiceSpead', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='UserWordsList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('en', models.CharField(max_length=200)),
                ('ru', models.CharField(max_length=200)),
                ('repetitions', models.IntegerField(verbose_name='количество повторов')),
                ('geeks_field', models.BooleanField(verbose_name='знаю или нет')),
                ('timeCreate', models.DateTimeField(auto_now_add=True)),
                ('timeUpdate', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='WordsList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('en', models.CharField(max_length=200)),
                ('ru', models.CharField(max_length=200)),
                ('timeCreate', models.DateTimeField(auto_now_add=True)),
                ('timeUpdate', models.DateTimeField(auto_now=True)),
                ('audio', models.FileField(upload_to='audio/')),
                ('audioSlow', models.FileField(upload_to='audioSlow/')),
                ('categories', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.categories')),
            ],
        ),
    ]
