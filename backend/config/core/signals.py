from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model

from .models import CustomUser, Settings, UserWordsList
from core.middleware import get_current_user 

User = get_user_model()

@receiver(post_save, sender=User)
def user_created(sender, instance, created, **kwargs):
    if created:
        # Ваша бизнес-логика при создании пользователя
        print(f"User {instance.email} has been created.")
        Settings.objects.create(
            numberWordsDay=20,
            amountInputText=8,
            numberOptionsGuessing=8,
            voiceoverWords=True,
            voiceSpead=True,
            user=instance,
        )


# @receiver(pre_save, sender=UserWordsList)
# def dictionary_cleaning(sender, instance, **kwargs):
#     print("create dict...")
    # user=get_current_user()

    # print(instance)
    # for obj in UserWordsList.objects.select_related(user).all()



# @receiver(post_save, sender=CustomUser)
# def postSaveUser(sender, instance, created, **kwargs):
    # user = get_current_user()
    # print(f"Current user: {user}")

    # if user and not user.is_anonymous:
    #     if Settings.objects.count() == 0:
    #         Settings.objects.create(
    #             numberWordsDay=20,
    #             amountInputText=8,
    #             numberOptionsGuessing=8,
    #             voiceoverWords=True,
    #             voiceSpead=True,
    #             user=user,
    #         )
