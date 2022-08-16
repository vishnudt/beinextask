from rest_framework import serializers
from .models import Managerdata, Task, Userdata

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = [ 'id', 'task_name', 'task_id','task_status','start_time','end_time' ,'created_date', 'approval_status', 'assigned_manager', 'task_description']



class UserSerializer(serializers.ModelSerializer):
    class Meta :
        model = Userdata
        fields = '__all__'

class ManagerSerializer(serializers.ModelSerializer):
    class Meta :
        model = Managerdata
        fields = '__all__'