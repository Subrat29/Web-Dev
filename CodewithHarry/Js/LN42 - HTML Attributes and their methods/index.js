let first = document.getElementById("first")

// getAttribute
let a = first.getAttribute("class")
// console.log(a);

// hasAttribute
// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))

// setAttribute
// first.setAttribute("hidden", "true")
first.setAttribute("class", "true sachin") //set 2 classes true, sachin

// removeAttribute
// first.removeAttribute("class")

//elem.attributes
// console.log(first.attributes)

//custom attributes
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)
