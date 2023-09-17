// (old) Method - 1
function add(x,y){
    return x+y
}

let a = 1
let b = 4
console.log("ADD : " + add(a, b))

// (New) Method - 2 (Arrow function)
const add2 = (a,b) =>{
    return a+b;
}
console.log("ADD2 : " + add2(1,6))