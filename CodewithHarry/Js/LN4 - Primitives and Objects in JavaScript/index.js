// 7 primitive datatypes in javascript
// nn bb ss u 
// null number BigInt boolean string symbol undefined

let a = null;
let b = 383;
let c = true;
let d = BigInt("333") + BigInt("4");
let e = "Harry"
let f = Symbol("I am symbol babes");
let g = undefined;
let h;
console.log(a,b,c,d,e,f,g, h);

// to know type of any datatypes
console.log(typeof c);

// Objects in js 
// objects are key value pairs
const item = {
    "Harry": true,
    "Shubh": false,
    "loyal": 89,
    "hug": undefined
}
console.log(item["Shubh"]);
