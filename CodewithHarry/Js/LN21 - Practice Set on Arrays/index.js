// Q1
let arr = [11,22,36,74,59]
console.log(arr)
let a = 56
arr.push(a)
console.log(arr)

// Q2
let i = 5
while(i!=0){
    arr.push(i)
    i--;
}
console.log(arr)

// Q3
let arr1 = arr.filter((elem)=>{
    return elem % 2 == 0
})
console.log(arr1)

// Q4
let arr2 = arr.map((elem)=>{
    return elem*elem
})
console.log(arr2)

// Q5
let arr3 = [1,2,3,4,5]
let factarr = arr3.reduce((h1, h2)=>{
    return h1*h2
})
console.log(factarr)


// aasr763