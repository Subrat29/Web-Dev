// try {
//     let a = 0;
//     console.log(program);
//     console.log("Program succesfully!");
// } catch (error) {
//     console.log("This is error");
//     console.log(p);
// }
// finally{
//     console.log("Program End");
// }

const f = ()=>{
    try {
        let a = 0;
        console.log("Program ran succesfully");
        return;
    } catch (error) {
        console.log("This is an error");
        console.log(p);
    }
    finally
    {
        console.log("I am a good boy");
    }
}

f();
console.log("End f");