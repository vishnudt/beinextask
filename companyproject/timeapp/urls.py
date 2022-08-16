from django.urls import path
from . import views

urlpatterns = [
    path('task/',views.TaskViewset.as_view(), name='task')
]