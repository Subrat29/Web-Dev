const createTodo = async (todo)=>{
    
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo)
    }
    
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json();
    return response;
}

const getTodo = async (id)=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    let res = await response.json();
    return res;
}
     
const mainFunc = async()=>{
    let todo = {
        title: "Bhagwan Das",
        body: "Insaan",
        userId: 234
    }
    let todoResponse = await createTodo(todo);
    console.log(todoResponse);
    console.log(await getTodo(11));
}


mainFunc();


//   stringify: convert js object into string
//   parse:     convert jason string into js object