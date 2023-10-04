let a = 1
let b = 4

// (old) Method - 1
function add1(x,y){
    return x+y
}
console.log("ADD1 : " + add1(a, b))

// (New) Method - 2 (Arrow function)
const add2 = (a,b) =>{
    return a+b;
}
console.log("ADD2 : " + add2(a,b))

// the arrow function () => { /* Your code here */ }
// has been replaced with the 
// regular function function() { /* Your code here */ }. 