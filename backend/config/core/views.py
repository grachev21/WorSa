from rest_framework import generics, viewsets, mixins
from rest_framework.viewsets import GenericViewSet
from rest_framework.decorators import action
from .models import WordsList, Categories
from .serializers import WordsListSerializer
from rest_framework.response import Response

# from rest_framework.views import APIView


class WordsListSet(viewsets.ModelViewSet):
    # or replace on -> mixins.CreateModelMixin, mixins.RetrieveModelMixin,
    # mixins.UpdateModelMixin, mixins.ListModelMixin, GenericViewSet
    queryset = WordsList.objects.all()
    serializer_class = WordsListSerializer

    @action(methods=["get"], detail=False)
    def category(self, request, pk=None):
        cats = Categories.objects.get()
        return Response({"cats": [c.name for c in cats]})


# class WordsListAPIList(generics.ListCreateAPIView):
#     queryset = WordsList.objects.all()
#     serializer_class = WordsListSerializer


# class WordsListAPIUpdate(generics.UpdateAPIView):
#     queryset = WordsList.objects.all()
#     serializer_class = WordsListSerializer


# class WordsListAPIDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = WordsList.objects.all()
#     serializer_class = WordsListSerializer


# class WordsListAPIView(APIView):
#     def get(self, request):
#         w = WordsList.objects.all()
#         return Response({'posts': WordsListSerializer(w, many=True).data})

#     def post(self, request):
#         serializer = WordsListSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()

#         return Response({'post': serializer.data})

#     def put(self, request, *args, **kwargs):
#         pk = kwargs.get("pk", None)
#         if not pk:
#             return Response({'error': "method PUT not allowed"})

#         try:
#             instance = WordsList.objects.get(pk=pk)
#         except:
#             return Response({'error': 'Object does not exists'})

#         serializer = WordsListSerializer(data=request.data, instance=instance)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response({'post': serializer.data})

#     def delete(self, request, *args, **kwargs):
#         pk = kwargs.get('pk', None)
#         if not pk:
#             return Response({'error': 'Method DELETE not allowed'})

#         return Response({'post': 'delete post ' + str(pk)})
