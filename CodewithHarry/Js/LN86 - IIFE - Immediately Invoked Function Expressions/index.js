let ex = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456);
    }, 400);
  });
};

// let fn = async () => {
//   let a = await ex();
//   console.log(a);
//   let b = await ex();
//   console.log(b);
//   let c = await ex();
//   console.log(c);
// };
// fn();

// IIFE (code...)()
// used to avoid polluting gobal namespace means a, b, c ki life bs brackets ke andar hi h
(async () => {
    let a = await ex();
    console.log(a);
    let b = await ex();
    console.log(b);
    let c = await ex();
    console.log(c);
  })()