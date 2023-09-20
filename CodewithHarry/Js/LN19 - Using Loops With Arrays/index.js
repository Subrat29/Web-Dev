let num = [3,34,1,5,23]

//for loop
for(let i=0; i<num.length; i++){
    console.log(num[i])
}

// for each loop
num.forEach((elem) => {
    console.log(elem*elem)
})

//Array from : use to create an array from any other object
let naam = "Harry"
let  arr = Array.from(naam)
console.log(arr)

// For of (short cut for (for loop))
for(let item of num){
    console.log(item)
}

// For in (it gives keys in object and in array it give index)
// eg: num = [ 0: 3, 1: 34, 2: 1, 3: 5, 4: 23]
for(let i in num){
    console.log(i)
}