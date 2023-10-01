let a = document.getElementsByClassName("container")[0]

// a.onclick = ()=>{
//     a.innerHTML = "Hello World!"
// }

a.onclick = function(){
    a.innerHTML = "Hello World!"
}

console.log(document.getElementsByClassName("container"))
console.log(document.getElementsByClassName("container")[0])
console.log(document.getElementsByClassName("container")[1])
console.log(document.getElementsByClassName("container")[2])

// adding handler in js overrites the existing handler