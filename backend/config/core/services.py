from .models import Settings


class SettingsService:
    @staticmethod
    def set_default():
        print("set_default <<<")
        #  if Settings.objects.count() == 0:
        #     Settings.objects.create(
        #         numberWordsDay=20,
        #         amountInputText=8,
        #         numberOptionsGuessing=8,
        #         voiceoverWords=True,
        #         voiceSpead=True,
        #         user=user,
        #     )