//for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for in loop (use for keys of an object)
let obj = {
    harry: 49,
    shub: 30,
    ram: 33,
    shyam: 32,
    kaliya: 67
}

for(let a in obj){
    console.log(a);
}

for(let a in obj){
    console.log(a + " : " + obj[a]);
}

// for of loop (use for values of an object)
for(let b of "harry"){
    console.log(b);
}
