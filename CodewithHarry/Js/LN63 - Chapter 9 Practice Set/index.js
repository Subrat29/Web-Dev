// const loadScript = async (src) =>{
//     let p = new Promise((resolve, reject)=>{
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = () =>{
//             resolve("Uploaded Script succesfully!\n"+src);
//         }
//         document.body.appendChild(script);
//     })
//     return p;
// }

// Q1

// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js")
// a.then((value)=>{
//     console.log(value);
// });

//----------------------------------------------------------------------------------

// Q2

// const main = async ()=>{
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js")
//     console.log(a);
//     console.log(new Date().getMilliseconds());
// }
// main();

//----------------------------------------------------------------------------------

// Q3

// const mainFunc = () => {
//   let p4 = new Promise((resolve, reject) => {
//     setTimeout(async () => {
//       reject(new Error("Error occurs!!"));
//     }, 3000);
//   });
//   return p4;
// };

// let a = async () => {
//   try {
//     let c = await mainFunc();
//     console.log(c);
//   } catch (error) {
//     console.log("this error has been handled");
//   }
// };

// a();

//----------------------------------------------------------------------------------

// Q4
    
let p1 = async ()=>{
    let p = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("script1 is loaded");
        }, 1000);
    })
    return p;
}

let p2 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("script2 is loaded");
        }, 2000);
    })
}

let p3 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("script3 is loaded");
        }, 3000);
    })
}

let run = async ()=>{

    console.time("Run time");

    // Yha hm p1 ka wait kr rhe h jab tk value na aa jaye p1 ki then p2, p3 same
    // let a = await p1();
    // let b = await p2();
    // let c = await p3();

    // yha teeno chal pade h
    let a = p1();
    let b = p2();
    let c = p3();
    
    // promiseall parallel execution krke apko answer deta h
    let abc = await Promise.all([a,b,c]);
    
    console.timeEnd("Run time");

    console.log(abc);
}
run();