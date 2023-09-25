let b = document.body

// This can be commentnode, textnode etc
console.log("First child of b : ", b.firstChild)
// This can only be elementnode
console.log("First element child of b : ", b.firstElementChild)


const chageBgRed = () =>{
    document.body.firstElementChild.style.background = "red"
}