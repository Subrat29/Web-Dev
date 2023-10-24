// appears declaration to the top of the code before execution
greet();
console.log(a);

function greet(){
    console.log("Good Morning");
}
var a = 9;

//  Cannot access 'a' before initialization (for: const, let)
// const a = 8;
// let a = 2;

// function and class expression are not hoisted
// greet2();
// let greet2 = ()=>{
//     console.log("Good Morning");
// }

// greet3();
// var greet3 = ()=>{
//     console.log("Good Morning");
// }