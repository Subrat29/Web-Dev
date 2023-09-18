// Interview ques
//Note: delete: it is not method it is a operator
let num = [2,5,3,4,6]
console.log(num)

delete num[3]

console.log(num)
console.log(num.length) // remains 5

// concat
let num1 = [3,3,4,52,3]
let num2 = [222,555,7778,555]
let conc = num.concat(num1, num2);
console.log(conc)

// Interview ques
//**Note** - sort method : it sort it alphabetically not number wise
// phle 1 se aane wale sare sort chahe 1 or 10000 jo bhi ho phle aayege 2 se
let arr = [1,2,3,4,5,323,433,54,65,23,534,34,-348,-3]
arr.sort();
console.log(arr)


// Now how can then sort an array?
// compare : it is not inbuild method
let arr2 = [551, 22, 44, -2, -1, 443, 34, -333]

let compare = (a,b)=>{
    return a-b
}

arr2.sort(compare)
console.log(arr2)


// Rerverse()
let arr3 = [1,2,3,4,5,6]
console.log(arr3.reverse())


// splice and slice()

// splice: use for add
// Note : it modifies source array and return deleted elems

// (index, kitne elem remove krne h, konse new elem add kre)
let arr4 = [1,2,3,4,5,6, 7,8,9,11]
arr4.splice(2, 3, 101,102,103)
console.log(arr4)

// slice : create a new arry
const arr5 = [1,2,3,4]
console.log(arr5.slice(2))
console.log(arr5.slice(2, 3))

