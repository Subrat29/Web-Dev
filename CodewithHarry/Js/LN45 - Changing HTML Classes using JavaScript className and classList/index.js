let e1 = document.getElementById("first")
e1.className = "text-dark red"

// classlist, add, append etc
console.log(e1.classList)
e1.classList.remove("red")
e1.classList.add("yellow")

// toggle
console.log(e1.classList.toggle("red"))
console.log(e1.classList.toggle("red"))

// contains
console.log(e1.classList.contains("red"))
console.log(e1.classList.contains("yellow"))