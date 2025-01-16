from core.middleware import get_current_user
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import CustomUser, Settings

@receiver(post_save, sender=CustomUser)
def postSaveUser(sender, instance, created, **kwargs):
    user = get_current_user()
    print(f"Current user: {user}")

    if user and not user.is_anonymous:
        if Settings.objects.count() == 0:
            Settings.objects.create(
                numberWordsDay=20,
                amountInputText=8,
                numberOptionsGuessing=8,
                voiceoverWords=True,
                voiceSpead=True,
                user=user,
            )
