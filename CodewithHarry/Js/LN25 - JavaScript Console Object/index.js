// console has various methods

// assert() : if false then it show assertion failed else nothing
console.assert(2>22)
console.assert(22>2)

// clear() : clear screen
console.clear()

// table() : obj in tabular form
obj = {a:1, b:2, c:3}
console.table(obj)

// warn()
console.warn("Hey don't go there")

// error
console.error("This is reason for errors")

// info
console.info("hey, remember to type name correctly")

// time()
console.time("a")
console.timeEnd("a") // timer stops here, total time taken form instruction 23 to 24

// example
console.time("while loop")
let i = 5
while(!i)
{
    i--
}
console.timeEnd("while loop")