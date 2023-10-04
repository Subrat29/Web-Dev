// Fullfilledment 2 tarahe se hota h resolve me ya reject me

let p1 = new Promise((resolve, reject)=>{
    console.log("Promises is pending");

    setTimeout(() => {
        // console.log("I am a promise and i am fullfilled");
        resolve(true);
    }, 2000);
});

let p2 = new Promise((resolve, reject)=>{
    console.log("Promises is pending");

    setTimeout(() => {
        // console.log("I am a promise and i am rejected");
        reject(new Error("I am an error"));
    }, 2000);
});

// To get the values
p1.then((value)=>{
    console.log(value);
})

// To catch the errors
p2.catch((errorPelDo)=>{
    console.log(errorPelDo+"\np2 error by catch function");
})

// To get the errors
p2.then(null, (error)=>{
    console.log(error+"\np2 error by then function");
});

console.log(p1,p2);


// HW
let promise1 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("resolve done");
    }, 1000);
});
let promise2 = new Promise((reject)=>{
    setTimeout(() => {
        reject("reject done");
    }, 1000);
});

// promise1.then(alert);
// promise1.then(prompt);
// promise2.then(alert);
// promise2.finally(alert("finally execution completed"));