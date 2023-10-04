let promise = new Promise(function(resolve, reject){
    // alert("i am a alert in promise")
    // resolve(console.log("promise completed"))
    resolve(57)
})
console.log(promise);

console.log("Hello1");
setTimeout(function(){
    console.log("Hello2 after 2 seconds");
}, 2000);
console.log("Hello3");

// promises use for parallel execution
