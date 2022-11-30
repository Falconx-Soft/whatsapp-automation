from django.shortcuts import render

# Create your views here.

def home(request):
    context = {
        'tab_title':'Home',
    }
    return render(request,'maticApi/home.html')