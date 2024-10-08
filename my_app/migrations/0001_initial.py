# Generated by Django 4.2 on 2024-09-21 09:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DarkTheme',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('theme', models.BooleanField(verbose_name='Включить темную тему.')),
            ],
        ),
        migrations.CreateModel(
            name='StoryWords',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ru', models.CharField(max_length=200, null=True)),
                ('en', models.CharField(max_length=200, null=True)),
                ('transcription', models.CharField(max_length=200, null=True)),
                ('offer', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserWordsStory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ru', models.CharField(max_length=200, null=True)),
                ('en', models.CharField(max_length=200, null=True)),
                ('transcription', models.CharField(max_length=200, null=True)),
            ],
        ),
    ]
