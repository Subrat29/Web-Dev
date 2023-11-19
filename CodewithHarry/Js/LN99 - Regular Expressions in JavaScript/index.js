// Normal;
// const text = "Harry is a very very nice and very good boy";
// console.log(text.replace("very", "VERY"));

// Using regex
const regex = /very/g;
const text = "Harry is a very very nice and very good boy";
console.log(text.replace(regex, "VERY"));