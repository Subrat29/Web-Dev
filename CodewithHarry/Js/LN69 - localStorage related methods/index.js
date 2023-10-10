let key = "Name";
let value = "Dkbose";

// setItem()
localStorage.setItem(key, value);

// getItem()
console.log(localStorage.getItem(key));

if(key === "Name")
{
    // removeItem()
    localStorage.removeItem(key);
}

// key(index)
console.log(localStorage.key(1));

// length
console.log(localStorage.length);

// clear()
// localStorage.clear();
