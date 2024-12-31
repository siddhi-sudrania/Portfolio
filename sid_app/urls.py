from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.index,name="index"),
    path('contact/',views.contact,name="contact"),
    path('skills/',views.skills,name="skills"),
    path('projects/',views.projects,name="projects"),
    path('certificates/',views.certificates,name="certificates"),
    path('internship/',views.internship,name="internship")
]