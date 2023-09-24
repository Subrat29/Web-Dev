// Q1
let age = prompt("Enter your age");
age = Number.parseInt(age) 

const canDrive = (age)=>{
    age>=18?true:false;
}

if(canDrive(age)){
    alert("can drive")
}
else{
    alert("can not drive")
}
 
// Q2
let ask;
do {
  let age = prompt("Enter your age");
  if (age > 18) alert("You can drive son");
  else alert("You cant drive");
  ask = prompt("Want to check again?");
} while (ask === "y" || ask === "Y");

// Q3
let ask2;
do {
  let age = prompt("Enter your age");
  if (age > 18) {
    alert("You can drive son");
  } else {
    alert("You cant drive");
    console.error("NO drive")
  }
  ask2 = prompt("Want to check again?");
} while (ask2 === "y" || ask2 === "Y");

//  Q4
let num = prompt("Enter a number")
num = Number.parseInt(num)
if(num > 4)
{
    location.href = "https://google.com"
}

// Q5
let clr = prompt("Enter color to change bg-color")
