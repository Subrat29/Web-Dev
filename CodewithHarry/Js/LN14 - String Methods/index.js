// String never change these all fuctions return a new string

let naam  = "Toilet"

//length
console.log(naam.length)

//touppercase & tolowercase
console.log(naam.toUpperCase())
console.log(naam.toLowerCase())

//slice
console.log(naam.slice(2,4))
console.log(naam.slice(2))

// replace
console.log(naam.replace("Toi", "Pio"))

// concate & use +
let endNaam = "Dioder"
console.log(naam.concat(" ",endNaam, " okk"))

// trim: remove starting and ending spaces
let girl = "     ME EE N A_        "
console.log(girl)
console.log(girl.trim())

// for loop to print the string
for(let i=0; i<endNaam.length; i++)
{
    console.log(endNaam[i])
}

// Note: string is immutabe impossible to change string character like that
let str = "Ankush"
str[1] = "d"
console.log(str)