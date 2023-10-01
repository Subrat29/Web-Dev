document.write("Hello")

function sum(a,b) {
    a+b;
    console.log("yes i am running " + (a+b))
    console.log(a+b)
}

setTimeout(sum, 1000, 3, 5);

// setInterval : run every 3s
// setInterval(function repeat(){
//     alert("set Interval runs every 3 sec")
// }, 3000);

// setInterval(sum, 3000, 1,2,3);



// let a = setTimeout(function(){
//     alert("i am inside of settimeout")
// }, 4000)
// console.log(a)

// // uses
// let b = prompt("Do you want to run the settimeout?")
// if(b === "n")
// {
//     clearTimeout(a)
// }