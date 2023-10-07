// let p = fetch("https://goweather.herokuapp.com/weather/Ny");

let p = fetch("https://nekos.best/api/v2/hug?amount=10");

p.then((response)=>{
        console.log(response);
        console.log(response.status);
        console.log(response.ok);
        console.log(response.headers);

        return response.json();
        // return response.text();

}).then((value2)=>{
    console.log(value2);
});

