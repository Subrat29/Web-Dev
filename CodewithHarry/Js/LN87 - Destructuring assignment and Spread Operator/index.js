// No need to do this:
// let a = arr[0]
// let b = arr[1]

let arr = [3, -1, 8, 4, 5, 2, 4, 7, 8, 9, 1, 22, 33, 66];
// let [a,b,c, ...rest] = arr;
// console.log(a,b,c, rest);
 
// let [a, , b, ...rest] = arr;
// console.log(a, b, rest);

// Destructing assignment
// let {a, b} = {a:23, b:99}
// console.log(a, b); 

// Spread Operator
let arr1 = [3,5,8]
let obj1 = [...arr1];
console.log(obj1);

function sum(v1,v2,v3){
    return v1+v2+v3;
}
console.log(sum(...arr1));

let obj2 = {
    name: "Harry",
    company: "Company xyz",
    address: "XYZ"
}
// working: first take full obj second overwrite name
console.log({...obj2, name: "subrat"}); // work
console.log({ name: "subrat",...obj2}); // not work
