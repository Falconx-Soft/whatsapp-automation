from django.shortcuts import render

import requests
import json
# Create your views here.

def call_copymatic(request):
    payload = json.dumps({
            "model": request.POST['model'],
            "tone": request.POST['tone'],
            "creativity": request.POST['creativity'],
            "language": request.POST['language'],
            "audience": request.POST['audience'],
            "keywords": request.POST['keywords'],
            "company_name": request.POST['company_name'],
            "topic_social": request.POST['topic_social'],
            "instagram_keyword": request.POST['instagram_keyword'],
            "productname": request.POST['productname'],
            "full_name": request.POST['full_name'],
            "current_position": request.POST['current_position'],
            "current_industry": request.POST['current_industry'],
            "current_city": request.POST['current_city'],
            "website_name": request.POST['website_name'],
            "website_url": request.POST['website_url'],
            "page_type": request.POST['page_type'],

            "description": request.POST['description'],
            "topic": request.POST['topic'],
            "video_description": request.POST['video_description'],
            "quora_question": request.POST['quora_question'],
            "childhood": request.POST['childhood'],
            "hobbies": request.POST['hobbies'],
            "interests": request.POST['interests'],
            "skills": request.POST['skills'],
            "character_traits": request.POST['character_traits'],
            "point_of_view": request.POST['point_of_view'],
            "business_description": request.POST['business_description'],
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
        response = call_copymatic(request)
        try:
            context = {
                'tab_title':'Home',
                'response':response['ideas'].values()
            }
        except:
            # instagram-hashtag-generator
            context = {
                'tab_title':'Home',
                'response':response['results']
            }
    else:
        context = {
            'tab_title':'Home',
        }
    return render(request,'maticApi/home.html',context)