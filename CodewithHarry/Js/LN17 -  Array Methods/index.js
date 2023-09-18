let num = [3,5,2,5,2]

// tostring
let b = num.toString()
console.log(b)
console.log(typeof(b))

// join
let c = num.join("_")
console.log(c, typeof(c))

// pop : it change same array and it return pop elemets
let pop_elem = num.pop()
console.log(num, pop_elem)

// push
let push_elem = num.push(44)
console.log(num, push_elem)

// shift : remove first elem and return it
let r = num.shift()
console.log(num, r)

// unshift : add elem from beggining of array
let us = num.unshift(9)
console.log(num, us)