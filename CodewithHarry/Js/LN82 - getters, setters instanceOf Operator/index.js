class Animal {
  // it is safer to use this._name in get and set , in constructor may be use this.name
  constructor(name) {
    this._name = name;
  }
  fly() {
    console.log("i am flying");
  }
  get() {
    return this._name;
  }
  set(newName) {
    this._name = newName;
  }
}

class Rabbit extends Animal {
  eatCarrot() {
    console.log("Eat carrot gyandeep");
  }
}

let a = new Animal("Brunosy");
a.fly();
console.log(a.get());
a.set("Paadu");
console.log(a.get());

let c = 99;

let rabbi = new Rabbit();
rabbi.eatCarrot();

// Instance of
console.log(a instanceof Animal); // true
console.log(c instanceof Animal); // false
console.log(rabbi instanceof Animal); //true