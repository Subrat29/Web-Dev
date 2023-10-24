// Block scope
{
    const b = 54;
    console.log(b);
}

// Global scope
const a = -99;

// function scope
function fn() {
  let a = 9;
  console.log(a);
}
fn();

console.log(a);