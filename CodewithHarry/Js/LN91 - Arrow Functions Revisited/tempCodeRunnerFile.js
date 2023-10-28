const obj = {
    name: "Shubh",
    role: "Js contributer",
    exp: 33,
    show: function () {
        // Here, this is object, so work
        console.log(this);
        let that = this;
        setTimeout(function(){
            console.log(this);
            // Here, this is window object, so not work
            console.log(`The name is ${that.name}\nThe role is ${that.role}`);
      }, 2000);
    },
  };
  obj.show();