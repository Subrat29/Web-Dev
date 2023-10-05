setTimeout(() => {
  console.log("Hacking wifi... Please wait...");
}, 1000);

// Error Handling

// This gives error bc trycatch works synchronously
// try {
//   setTimeout(() => {
//     tryc
//     console.log(rahul);
//   }, 100);
// } 

try 
{
  setTimeout(() => {
    try
    {
        console.log(rahul);
    } 
    catch (error) 
    {
        console.log("Balle Balle error aago re!!");
    }
   }, 100);
} 
catch 
{
    console.log("Balle Balle error aago re!!");
}

setTimeout(() => {
  console.log("Fetching username and password... Please wait");
}, 4000);

setTimeout(() => {
  console.log("Hacking Rahul's fb id...Please wait...");
}, 7000);

setTimeout(() => {
  console.log("Hacking Rahul's fb id succesfully completed!");
}, 10000);
