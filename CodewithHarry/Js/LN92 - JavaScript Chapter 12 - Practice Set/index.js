// Q1
// const a = (text) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(text);
//     }, 2000);
//   });
// };

// (async () => {
//   let x = await a("Hello");
//   console.log(x);
//   x = await a("World");
//   console.log(x);
// })();


// Q2
// const sum = (a,b,c)=>{
//     return a + b + c;
// }
// let num = [1, 3, 5];
// console.log(sum(...num)/num.length);

// Q3
// const a = (text, n=2) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(text);
//       }, 1000*n);
//     });
//   };
  
//   (async () => {
//     let x = await a("Hello", 1);
//     console.log(x);
//     x = await a("World", 4);
//     console.log(x);
//   })();

// Q4
let simpleInterest = (p, r, t)=>{
    return (p * r * t) / 100;
}
let cal = simpleInterest(2300, 5, 1);
console.log(cal);