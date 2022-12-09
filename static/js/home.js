console.log("New js*****");
const model_dropdown = document.getElementById("model-dropdown");

const language_div = document.getElementById("language-div");
const tone_div = document.getElementById("tone-div");
const creativity_div = document.getElementById("creativity-div");
const audience_div = document.getElementById("audience-div");
const keywords_div = document.getElementById("keywords-div");
const company_name_div = document.getElementById("company-name-div");
const topic_social_div = document.getElementById("topic-social-div");

const description_div = document.getElementById("description-div");


function model_change() {
    set_default();
    var x = model_dropdown.value;
    console.log(x,"****");
    if (x == "social-media-post-business"){
        social_media_post_business();
    }else if(x == "social-media-post-personal"){
        social_media_post_personal();
    }
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

    description_div.style.display = "none";
}


set_default();

social_media_post_business();