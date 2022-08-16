from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import viewsets
from.models import *
from .serializers import *





# Create your views here.
class TaskViewset(viewsets.ModelViewSet):
    queryset= Task.objects.all()
    serializer_class = TaskSerializer

  

class UserlistView(viewsets.ModelViewSet):
    queryset = Userdata.objects.all()
    serializer_class = UserSerializer
    
    


    # def post(self, request, *args, **kwargs):
    #         response = super(ObtainAuthToken,self).post(request,*args,**kwargs)
    #         token = Token.objects.get(key=response.data['token'])
    #         user = Userdata.objects.get(id=token.user_id)
    #         serializer = UserSerializer(user,many=False)
    #         return response({'token':token.key, 'user': serializer})

# class GetAuthToken(ObtainAuthToken):
#     def post(self, request, *args, **kwargs):
#         response = super(GetAuthToken,self).post(request,*args,**kwargs)
#         token = Token.objects.get(key=response.data['token'])
#         user = Userdata.objects.get(id=token.user_id)
#         serializer = UserSerializer(user,many=False)
#         return response({'token':token.key, 'user': serializer})

   
  
  
class ManagerView(viewsets.ModelViewSet):
    queryset = Managerdata.objects.all()
    serializer_class = ManagerSerializer



    

    


    