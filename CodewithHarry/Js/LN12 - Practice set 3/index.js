// Q1
let marks = {
    harry: 90,
    shubham: 9,
    lovish: 34,
    monika: 2
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log(Object.keys(marks)[i] + " : " + marks[Object.keys(marks)[i]])
}

// Q2
for(let key in marks){
    console.log(key + " : " + marks[key])
}

