// const sayHello =()=>{
//   console.log("Hello ji");
// }
// sayHello()

// const sayHello = (name, greet) => {
//   console.log("Namaste, " + name + " " + greet);
// };
// sayHello("Anku", "Subh ratri");

// const obj = {
//   name: "Shubh",
//   role: "Js contributer",
//   exp: 33,
//   show: function () {
//       setTimeout(function(){
//           console.log(`The name is ${this.name}\nThe role is ${this.role}`);
//     }, 2000);
//   },
// };
// obj.show();

// const obj = {
//     name: "Shubh",
//     role: "Js contributer",
//     exp: 33,
//     show: function () {
//         // Here, this is object, so work
//         console.log(this);
//         let that = this;
//         setTimeout(function(){
//             console.log(this);
//             // Here, this is window object, so not work
//             console.log(`The name is ${that.name}\nThe role is ${that.role}`);
//       }, 2000);
//     },
//   };
//   obj.show();


// Therefore, we use ARROW FUNCTION this that automatically take 'this' from it lexical parent
// ARROW FN- use parent this not create his 'this
const obj = {
    name: "Shubh",
    role: "Js contributer",
    exp: 33,
    show: function () {
        setTimeout(()=>{
            console.log(`The name is ${this.name}\nThe role is ${this.role}`);
      }, 2000);
    },
  };
  obj.show();