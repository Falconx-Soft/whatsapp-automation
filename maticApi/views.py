from django.shortcuts import render

import requests
import json
# Create your views here.

def call_copymatic(content,model,tone,creativity,language,audience,keywords):
    payload = json.dumps({
            "model": model,
            "tone": tone,
            "creativity":creativity,
            "topic":content,
            "language": language,
            "audience": audience,
            "keywords": keywords,
        })
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer dff15f467e4ddc7801d670738',
    }
    response = requests.request("POST", 'https://api.copymatic.ai', headers=headers, data=payload)

    print(response.json(),"************")
    return response.json()

def home(request):

    if request.method == 'POST':
        print(request.POST['content'],"Content")
        print(request.POST['model'],"Model")
        print(request.POST['tone'],"Tone")
        print(request.POST['creativity'],"Creativity")
        print(request.POST['language'],"Language")
        print(request.POST['audience'],"Audience")
        print(request.POST['keywords'],"Keywords")

        if request.POST['content'] != '':
            response = call_copymatic(
                            request.POST['content'],
                            request.POST['model'],
                            request.POST['tone'],
                            request.POST['creativity'],
                            request.POST['language'],
                            request.POST['audience'],
                            request.POST['keywords']
                        )
            context = {
                'tab_title':'Home',
                'response':response['ideas'].values()
            }
    context = {
        'tab_title':'Home',
    }
    return render(request,'maticApi/home.html',context)