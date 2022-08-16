
from django.db import models

# Create your models here.



class Task(models.Model):
    task_name = models.CharField(max_length=250)
    task_id = models.IntegerField()
    task_status = models.CharField(max_length=250)
    start_time = models.TimeField()
    end_time = models.TimeField()
    created_date = models.DateField()
    approval_status = models.CharField( max_length=250)
    assigned_manager = models.CharField(max_length=300)
    task_description = models.CharField(max_length=300)

    def __str__(self) -> str:
        return self.task_name


class Userdata(models.Model):
    full_name = models.CharField(max_length=300)
    username = models.CharField(max_length=300)
    password = models.CharField(max_length=250)
    user_id = models.IntegerField()
    is_superuser = models.CharField(max_length=300)
    department = models.CharField(max_length=300)
    designation = models.CharField(max_length=300)

    def __str__(self) -> str:
        return self.full_name


class Managerdata(models.Model):
    name = models.CharField(max_length=300)
    username = models.CharField(max_length=300)
    password = models.CharField(max_length=200)
    manager_id = models.IntegerField()

    def __str__(self) -> str:
        return self.name
