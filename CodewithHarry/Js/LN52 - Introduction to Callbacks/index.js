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
        callback(src);
    }

    script.onerror = function(){
        console.log("Error loading script with src\n" + src)
        callback(new Error("Src got an element"));
    }

    document.body.appendChild(script);
}

function hello(src){
    alert("hello script loaded\n" + src);
}
function gm(src){
    alert("goodmorning script loaded\n" + src);
}

// loadScript("htjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", gm);
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", gm);