// Noter: These fns not modify original array bidu

// map()
// it creates a new array by performing some operations on each array element
// we use (for each) when we have to perform some operations on existing elements of an array

let arr = [1,2,3,4]
console.log(arr)
let a = arr.map((value)=>{
    console.log(value)
    return value+1
})
console.log(a)

let arr1 = [11,21,31,41]
console.log(arr1)
let a1 = arr1.map((value, index, array)=>{
    console.log(value, index, array)
    return value+1
})
console.log(a1)


// Filter()
let arr2 = [45, 23, 21, 0 , 3, 5]
let f = arr2.filter((a)=>{
    return a<10
})

console.log(arr2)
console.log(f)


//  reduce() : reduce an array to an single value

// below fn take 2 no from array then add it and then take ans of prev add and next elem until last
let arr3 = [1,2,3,5,2,1]
let newarr3 = arr3.reduce((h1, h2)=>{
    return h1+h2
})
console.log(newarr3)