// store data on current tab only not new tab

// all functions are same as local storage 

// storage Event
window.onstorage = (e)=>{
    alert("key changed mam");
    console.log(e);
}

localStorage.setItem("Name3", "dk3");
localStorage.setItem("Name3", "dk2");