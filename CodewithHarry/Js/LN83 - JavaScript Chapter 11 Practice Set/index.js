// Question-1,2,5

class Complex {
  constructor(rr, ii) {
    this.real = rr;
    this.img = ii;
  }

  display() {
    console.log(this.real + " + i" + this.img);
  }

  add(complex) {
    console.log(this.real + complex.real + " + i" + (this.img + complex.img));
  }

  get() {
    return console.log(this.real + " + i" + this.img);
  }

  set(r, i) {
    this.real = r;
    this.img = i;
  }
}

let c1 = new Complex(2, 4);
c1.display();

let c2 = new Complex(3, 5);
c2.display();

// add
c2.add(c1);

let c3 = new Complex();
c3.set(333,333);
c3.get();

// -------------------------------------------------------------------------------------------------
// Question-3,4
// class Human {
//   constructor() {}

//   canPhaat() {
//     console.log("can paaaaad maring");
//   }

//   canSex() {
//     console.log("can sex 5times a day");
//   }

//   canEat() {
//     console.log("can eat well");
//   }
// }

// class Student extends Human {
//     canSex() {
//         console.log("can sex infinite a day");
//     }
// }

// let stud1 = new Student();
// stud1.canSex();
// stud1.canPhaat();
// console.log(stud1 instanceof Human);

// -------------------------------------------------------------------------------------------------

// Question 5
