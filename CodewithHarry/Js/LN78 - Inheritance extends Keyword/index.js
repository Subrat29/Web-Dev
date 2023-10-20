class Animal {
  canBreath() {
    console.log("can Breath");
  }

  canfeel() {
    console.log("can Feel");
  }

  eat() {
    console.log("need to eat");
  }

  reproduction() {
    console.log("can reproduce");
  }
}

class bandar extends Animal{
  jump() {
    console.log("can jump");
  }

  hide() {
    console.log("can hide in trees");
  }
}

let bandar1 = new bandar();
bandar1.canBreath();
bandar1.hide();
