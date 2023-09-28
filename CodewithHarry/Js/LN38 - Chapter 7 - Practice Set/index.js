// Q1
console.log(document.getElementsByTagName("nav")[0])
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

// Q2
// no

// Q3
console.log(document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green")
console.log(document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green")

// Q4
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan"
})