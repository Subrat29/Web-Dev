// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("p1 Resolved after 2 seconds");
//     resolve(56);
//   }, 2000);
// });


// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise-p2");
//     }, 2000);
//   });
//   return p2;
// }).then((value)=>{
//     console.log(value+"\nNow, p2 resolve after 2 more seconds");
// }).then((value)=>{
//     console.log("Now, next resolve");
// }).then((value)=>{
//     console.log("Now, next to next resolve")
// });
// promises solve the pyramid of doom problem 


// ------------------------------------------------------------------------------------------

// Ques: rewrite loadscript function of lecture-52 using promises
function loadScript(src){
    return new Promise((resolve, reject) =>{
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = function() {
        resolve(1);
    }
    script.onerror = function(){
        reject(0);
    }
});
}

let p1 = loadScript("https://www.google.com/");
p1.then(function(value){
    console.log(value);
    console.log("Script load he gyi re baba!!!");
    return loadScript("https://www.fb.com/")
}).then(function(value){
    console.log("second script is ready to load");
}).catch(function(error){
    console.log(error);
    console.log("Omfo error aago re script load na heri??")
})











// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", goodmorning);