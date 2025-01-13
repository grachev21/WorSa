from django.dispatch import receiver
from django.db.models.signals import post_save
from .models import CustomUser, Settings
from core.middleware import get_current_user


@receiver(post_save, sender=CustomUser)
def postSaveUser(sender, instance, **kwargs):
    user = get_current_user()

    if Settings.objects.count() == 0:
        Settings.objects.select_related('user').create(
            numberWordsDay=20,
            amountInputText=8,
            numberOptionsGuessing=8,
            voiceoverWords=True,
            voiceSpead=True,
            user=user
        )


