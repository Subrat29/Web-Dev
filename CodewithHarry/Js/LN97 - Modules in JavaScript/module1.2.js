// const hello = require("./module1.1")
// hello.hello()
// hello.ahello("gita")
// hello.ahello("sunita")
// hello.ahello("rahul")
// hello.ahello("dhasrath")
// hello.ahello("Rman")

// Use destructuring in js
const {hello, ahello} = require("./module1.1")
hello()
ahello("gita")
ahello("sunita")
ahello("rahul")
ahello("dhasrath")
ahello("Rman")

// Note: u have to remove type: "module" (from packagej.json)