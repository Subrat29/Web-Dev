//Q1
let a = "yes";
let b = 3;
console.log(a+b);

//Q2
console.log(typeof(a+b));

//Q3
const Stud = {
    Stud_name: "jerry",
    section: "4th-A",
    isStudent: true
}
Stud["Stud_name"] = "Tom"
Stud["friend"] = "kalia"
console.log(Stud);

//Q4
Stud["Stud_name"] = "Tom"
Stud["friend"] = "kalia"
console.log(Stud);
// Now Stud cannot be change usne bandhan badh liya h object ke sang
// Below throw errors
// Stud = 33
// console.log(Stud)


//Q5
const Dict = {
    "Apple": "it is a fruit okkkey",
    "Subrat": "it is a person hehehe",
    "Tree": "it is a podha kyaaa dekhing",
    "Bag": "it is a storage type thing malum ni",
    "Laptop": "it is used for watching what u thing right now"
}
console.log(Dict["Apple"])
console.log(Dict.Apple)
