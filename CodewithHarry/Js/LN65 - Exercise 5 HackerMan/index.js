let hkbox = document.getElementById("hackBox");

let p1 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Initializing Hack Program ...");
            hkbox.innerHTML = "Initializing Hack Program ...";
        }, 2000);
    })
}
    
let p2 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Hacking Ashish's username ...");
            hkbox.innerHTML = "Hacking Ashish's username ...";
        }, 4000);
    })
}
    
let p3 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Username found! aashishfkr23 ...");
            hkbox.innerHTML = "Username found! aashishfkr23 ...";
        }, 6000);
    })
}

let p4 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Connecting to facebook ...");
            hkbox.innerHTML = "Connecting to facebook ...";
        }, 8000);
    })
}
let p5 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Facebook hacked succesfully!");
            hkbox.innerHTML = "Facebook hacked succesfully!";
        }, 10000);
    })
}

const hackerman = async ()=>{

    let a = await p1();
    console.log(a);
    let b = await p2();
    console.log(b);
    let c = await p3();
    console.log(c);
    let d = await p4();
    console.log(d);
    let e = await p5();
    console.log(e);
}

hackerman();