p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("value 1");
    }, 1000);
})

p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        // resolve("value 2");
        reject(new Error("Error occurs babes!!"));
    }, 2000);
})

p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("value 3");
    }, 3000);
})

// p1.then((value)=>{
//     console.log(value);
// });

// p2.then((value)=>{
//     console.log(value);
// });

// p3.then((value)=>{
//     console.log(value);
// });



// promise.all()
let promise_all1 = Promise.all([p1,p2,p3]);
promise_all1.then((value)=>{
    console.log(value);
})

// promise.allSettled()
let promise_all2 = Promise.allSettled([p1,p2,p3]);
promise_all2.then((value)=>{
    console.log(value);
})

// promise.race()
let promise_all3 = Promise.race([p1,p2,p3]);
promise_all3.then((value)=>{
    console.log(value);
})

// promise.any()
let promise_all4 = Promise.any([p1,p2,p3]);
promise_all4.then((value)=>{
    console.log(value);
})

// promise.resolve()
let promise_all5 = Promise.resolve(8787);
promise_all5.then((value)=>{
    console.log(value);
})

// promise.reject()
let promise_all6 = Promise.reject(new Error("hey"));
promise_all6.catch((value)=>{
    console.log(value);
})