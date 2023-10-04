// Syncronous programming
// let a = prompt("What is ur name?");
// let b = prompt("What is ur age?");
// console.log(a,b)

// Asynchronous programming
console.log("start"); //1
setTimeout(function(){// 3
    console.log("hey, i am good")
}, 3000) 
console.log("end"); //2  

// Callbacks
function loadScript(src, callback)
{
    let script = document.createElement("script");
    script.src = src;

    script.onload = function(){
        console.log("script loaded\n" + src);
        callback(null,src);
    }

    script.onerror = function(){
        console.log("Error loading script with src\n" + src)
        callback(new Error("Src got an element"));
    }

    document.body.appendChild(script);
}

function hello(error, src){
    if(error){
        console.log(error);
        return;
    }
    alert("hello!\n script loaded\n" + src);
}

function goodmorning(error, src){
    if(error){
        console.log(error);
        return;
    }
    alert("Good Morning!\n script loaded\n" + src);
}

loadScript("htjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", goodmorning);
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", goodmorning);