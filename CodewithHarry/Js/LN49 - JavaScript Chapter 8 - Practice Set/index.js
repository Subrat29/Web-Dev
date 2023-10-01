// Q3
let ggl = document.getElementById("google");
let fb = document.getElementById("facebook");
let twt = document.getElementById("twitter");

ggl.addEventListener("click", function(){
    window.location = "https://www.google.com";
    window.focus();
})
fb.addEventListener("click", function(){
    window.location = "https://www.facebook.com";
    window.focus();
})
twt.addEventListener("click", function(){
    window.location = "https://www.twitter.com";
    window.focus();
})


// Q4
setInterval(function(){
    document.querySelector("#bul").classList.toggle("bulb")
}, 200);