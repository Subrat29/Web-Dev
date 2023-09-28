//change the title to red
let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "blue"

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"

document.querySelector(".this").style.color = "red"
document.querySelector(".this").style.background = "black"

console.log(document.getElementsByTagName("a"))
console.log(document.body.getElementsByTagName("a"))

console.log(document.querySelector(".card").getElementsByTagName("a"))

console.log(document.getElementsByName("search"))