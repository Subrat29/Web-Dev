console.log("hello duniya");

// var = it is not used in today, use for globally
// let = use in today world, it cannot be redeclared but reinitialized
// const = constant cannot be reinitialized

var a = 44;
{
    var a = 'this';
}
console.log(a);

let b = 44;
{
    let b = 'this';
}
console.log(b);

const c = 33;
{
    const c = 3;
}
console.log(c);