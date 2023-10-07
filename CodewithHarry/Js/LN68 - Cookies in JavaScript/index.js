// 2 cookie separate by ;
// key = value
// work as : key value pair

console.log(document.cookie);
document.cookie = "Dino=james345";
console.log(document.cookie);

let key = prompt("enter key");
let value = prompt("enter value");
document.cookie = `${key}=${value}`;
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);
// console.log(decodeURIComponent(value));