let a = {
    name: "Abhishek",
    language: "Hinglish"
}
console.log(a);

let p = {
    run: ()=> {
        alert("run")
    }
}

p.__proto__ = {
    name2: "Rahul" 
}

a.__proto__ = p
a.run()
console.log(a.name2);


// first, go to "a" to search name2 ---> idhr nhi h
// then go to prototype of "a" to find name2 (means in p) ---> but idhr bhi nhi h
// then last go to prototype of p to find name2 ---> yesss found
