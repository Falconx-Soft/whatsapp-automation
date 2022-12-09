console.log("New js*****");
const model_dropdown = document.getElementById("model-dropdown");

const language_div = document.getElementById("language-div");
const tone_div = document.getElementById("tone-div");
const creativity_div = document.getElementById("creativity-div");
const audience_div = document.getElementById("audience-div");
const keywords_div = document.getElementById("keywords-div");
const company_name_div = document.getElementById("company-name-div");
const topic_social_div = document.getElementById("topic-social-div");
const instagram_keyword_div = document.getElementById("instagram-keyword-div");
const productname_div = document.getElementById("productname-div");
const full_name_div = document.getElementById("full-name-div");
const current_position_div = document.getElementById("current-position-div");
const current_industry_div = document.getElementById("current-industry-div");
const current_city_div = document.getElementById("current-city-div");
const website_name_div = document.getElementById("website-name-div");
const website_url_div = document.getElementById("website-url-div");
const page_type_div = document.getElementById("page-type-div");

const description_div = document.getElementById("description-div");
const topic_div = document.getElementById("topic-div");
const video_description_div = document.getElementById("video-description-div");
const video_title_div = document.getElementById("video-title-div");
const quora_question_div = document.getElementById("quora-question-div");
const childhood_div = document.getElementById("childhood-div");
const hobbies_div = document.getElementById("hobbies-div");
const interests_div = document.getElementById("interests-div");
const skills_div = document.getElementById("skills-div");
const character_traits_div = document.getElementById("character-traits-div");
const point_of_view_div = document.getElementById("point-of-view-div");
const business_description_div = document.getElementById("business-description-div");


function model_change() {
    set_default();
    var x = model_dropdown.value;
    if (x == "social-media-post-business"){
        social_media_post_business();
    }else if(x == "social-media-post-personal"){
        social_media_post_personal();
    }else if(x == "instagram-captions"){
        instagram_caption();
    }else if(x == "instagram-hashtag-generator"){
        instagram_hashtag_generator();
    }else if(x == "facebook-primary"){
        facebook_primary();
    }else if(x == "facebook-headlines"){
        facebook_headlines();
    }else if (x == "google-headlines"){
        google_headlines();
    }else if (x == "google-descriptions"){
        google_descriptions();
    }else if (x == "youtube-titles"){
        youtube_titles();
    }else if (x == "youtube-descriptions"){
        youtube_descriptions();
    }else if(x == "quora-answers"){
        quora_answers();
    }else if(x == "personal-bio"){
        personal_bio();
    }else if(x == "website-headlines"){
        website_headlines();
    }else if(x == "website-subheadlines"){
        website_headlines();
    }else if (x == "product-descriptions"){
        product_descriptions();
    }else if(x == "value-proposition"){
        website_headlines();
    }else if(x == "feature-to-benefit"){
        website_headlines();
    }else if(x == "meta-titles"){
        meta_titles();
    }else if(x == "meta-descriptions"){
        meta_descriptions();
    }
}

function meta_descriptions(){
    language_div.style.display = "flex";
    creativity_div.style.display = "flex";
    website_name_div.style.display = "flex";
    keywords_div.style.display = "flex";
    page_type_div.style.display = "flex";
    business_description_div.style.display = "none";
}

function meta_titles(){
    creativity_div.style.display = "flex";
    website_name_div.style.display = "flex";
    website_url_div.style.display = "flex";
    keywords_div.style.display = "flex";
}

function product_descriptions(){
    language_div.style.display = "flex";
    creativity_div.style.display = "flex";
    audience_div.style.display = "flex";
    description_div.style.display = "flex";
    productname_div.style.display = "flex";
}

function website_headlines(){
    language_div.style.display = "flex";
    tone_div.style.display = "flex";
    creativity_div.style.display = "flex";
    audience_div.style.display = "flex";
    productname_div.style.display = "flex";
    description_div.style.display = "flex";
}

function personal_bio(){
    language_div.style.display = "flex";
    creativity_div.style.display = "flex";
    full_name_div.style.display = "flex";
    current_position_div.style.display = "flex";
    current_industry_div.style.display = "flex";
    current_city_div.style.display = "flex";
    childhood_div.style.display = "flex";
    hobbies_div.style.display = "flex";
    interests_div.style.display = "flex";
    skills_div.style.display = "flex";
    character_traits_div.style.display = "flex";
    point_of_view_div.style.display = "flex";
}

function quora_answers(){
    language_div.style.display = "flex";
    creativity_div.style.display = "flex";
    quora_question_div.style.display = "flex";
}

function youtube_descriptions(){
    language_div.style.display = "flex";
    creativity_div.style.display = "flex";
    video_title_div.style.display = "flex";
}

function youtube_titles(){
    language_div.style.display = "flex";
    creativity_div.style.display = "flex";
    video_description_div.style.display = "flex";
}

function google_descriptions(){
    language_div.style.display = "flex";
    tone_div.style.display = "flex";
    creativity_div.style.display = "flex";
    audience_div.style.display = "flex";
    description_div.style.display = "flex";
    productname_div.style.display = "flex";
}

function google_headlines(){
    language_div.style.display = "flex";
    tone_div.style.display = "flex";
    creativity_div.style.display = "flex";
    audience_div.style.display = "flex";
    description_div.style.display = "flex";
    productname_div.style.display = "flex";
}

function facebook_headlines(){
    language_div.style.display = "flex";
    tone_div.style.display = "flex";
    creativity_div.style.display = "flex";
    audience_div.style.display = "flex";
    description_div.style.display = "flex";
    productname_div.style.display = "flex";
}

function facebook_primary(){
    language_div.style.display = "flex";
    tone_div.style.display = "flex";
    creativity_div.style.display = "flex";
    audience_div.style.display = "flex";
    description_div.style.display = "flex";
    productname_div.style.display = "flex";
}

function instagram_hashtag_generator(){
    instagram_keyword_div.style.display = "flex";
}

function instagram_caption(){
    language_div.style.display = "flex";
    tone_div.style.display = "flex";
    topic_div.style.display = "flex";
}

function social_media_post_business(){
    language_div.style.display = "flex";
    tone_div.style.display = "flex";
    creativity_div.style.display = "flex";
    company_name_div.style.display = "flex";
    description_div.style.display = "flex";
    topic_social_div.style.display = "flex";
}

function social_media_post_personal(){
    language_div.style.display = "flex";
    tone_div.style.display = "flex";
    description_div.style.display = "flex";
}

function set_default(){
    language_div.style.display = "none";
    tone_div.style.display = "none";
    creativity_div.style.display = "none";

    audience_div.style.display = "none";
    keywords_div.style.display = "none";
    company_name_div.style.display = "none";
    topic_social_div.style.display = "none";
    instagram_keyword_div.style.display = "none";
    productname_div.style.display = "none";
    full_name_div.style.display = "none";
    current_position_div.style.display = "none";
    current_industry_div.style.display = "none";
    current_city_div.style.display = "none";
    website_name_div.style.display = "none";
    website_url_div.style.display = "none";
    page_type_div.style.display = "none";


    description_div.style.display = "none";
    topic_div.style.display = "none";
    video_description_div.style.display = "none";
    video_title_div.style.display = "none";
    quora_question_div.style.display = "none";
    childhood_div.style.display = "none";
    hobbies_div.style.display = "none";
    interests_div.style.display = "none";
    skills_div.style.display = "none";
    character_traits_div.style.display = "none";
    point_of_view_div.style.display = "none";
    business_description_div.style.display = "none";

}

set_default();

social_media_post_business();