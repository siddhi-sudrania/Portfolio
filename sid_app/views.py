from django.shortcuts import render,redirect


# Create your views here.
def index(request):
    return render(request,"index.html")
def contact(request):
    return render(request,"contact.html")
def certificates(request):
    return render(request,"certificates.html")
def projects(request):
    return render(request,"projects.html")
def skills(request):
    return render(request,"skills.html")
def internship(request):
    return render(request,"internship.html")