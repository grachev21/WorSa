from rest_framework.views import APIView
from rest_framework.response import Response
from .models import WordsList
from .serializers import WordsListSerializer

from rest_framework import generics 

# class WordsListAPIView(generics.ListAPIView):
#     queryset = WordsList.objects.all()
#     serializer_class = WordsListSerializer
            


class WordsListAPIView(APIView):
    def get(self, request):
        w = WordsList.objects.all()
        return Response({'posts': WordsListSerializer(w, many=True).data})

    def post(self, request):
        serializer = WordsListSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        post_new = WordsList.objects.create(
            en=request.data['en'],
            ru=request.data['ru']
        )
        
        return Response({'post': WordsListSerializer(post_new).data})



