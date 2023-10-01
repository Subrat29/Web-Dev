let b = document.getElementById("btn");

// if we just copy/paste the function then a new object is formed and removeEventListener dont work

// b.addEventListener("click", function(e){
//     alert("hello 1")
// })
// b.addEventListener("click", function(e){
//     alert("hello 2")
// })

// let p = prompt("What is your favourite Number?")
// if(p==="2"){
//     b.removeEventListener('click', function(e){
//         alert("hello 1")
//     })
// }


let x = function(e){
    
    // pointer event
    console.log(e)

    // give which button is click
    console.log(e.target)

    console.log(e.type, e.clientX, e.clientY)

    alert("hello 1")
}
b.addEventListener("click", x);

let y = function(e){
    alert("hello 2")
}
b.addEventListener("click", y);

let p = prompt("What is your favourite Number?")

if(p==="2"){
    b.removeEventListener('click', x)
}