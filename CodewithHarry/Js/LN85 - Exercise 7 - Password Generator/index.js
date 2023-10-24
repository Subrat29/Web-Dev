class PasswordGenerator {
  constructor() {
    this.password = this.generatePassword();
  }

  getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  pickOneUppercase() {
    const uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return this.getRandomItem(uppercaseCharacter);
  }

  pickOneLowercase() {
    const lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz".split("");
    return this.getRandomItem(lowercaseCharacter);
  }

  pickOneSpecialCharacter() {
    const specialCharacter = "!@#$%^&*()_+-=[]{}|\\;:'\"<>,.?/`~".split("");
    return this.getRandomItem(specialCharacter);
  }
  pickoneNumber() {
    const numbers = "0123456789".split("");
    return this.getRandomItem(numbers);
  }

  generatePassword() {
    return "";
  }

  displayPassword(passType) {
    console.log(`${passType} Password: ${this.password}`);
  }
}

// Weak password
class WeakPassword extends PasswordGenerator {
  generatePassword() {
    return (
      this.pickOneLowercase() +
      this.pickOneSpecialCharacter() +
      this.pickOneLowercase() +
      this.pickoneNumber()
    );
  }
}

// Strong Password
class StrongPassword extends PasswordGenerator {
  generatePassword() {
    return (
      this.pickOneLowercase() +
      this.pickOneSpecialCharacter() +
      this.pickOneLowercase() +
      this.pickoneNumber() +
      this.pickOneLowercase() +
      this.pickOneSpecialCharacter() +
      this.pickOneLowercase() +
      this.pickoneNumber()
    );
  }
}

// Super Strong Password
class SuperStrongPassword extends PasswordGenerator {
  generatePassword() {
    return (
      this.pickOneLowercase() +
      this.pickOneSpecialCharacter() +
      this.pickOneLowercase() +
      this.pickoneNumber() +
      this.pickOneLowercase() +
      this.pickOneSpecialCharacter() +
      this.pickOneLowercase() +
      this.pickoneNumber() +
      this.pickOneLowercase() +
      this.pickOneSpecialCharacter() +
      this.pickOneLowercase() +
      this.pickoneNumber() +
      this.pickOneLowercase() +
      this.pickOneSpecialCharacter() +
      this.pickOneLowercase() +
      this.pickoneNumber()
    );
  }
}

// Funny Password
class FunnyPassword extends PasswordGenerator {
  generatePassword() {
    let funnyPass = [
      "Password",
      "Incorrect",
      "Password not found",
      "Nopassword",
      "passwordKyaRakhuYrr",
      "OhhToYehaiMeraPassword",
      "ChulladHoKya",
      "timekyahorhahvese",
      "timeisgonebhoolgyivosabkuch",
      "okkbyebaby",
    ];
    return this.getRandomItem(funnyPass);
  }
}

let pass1 = new WeakPassword();
pass1.displayPassword("Weak");
let pass2 = new StrongPassword();
pass2.displayPassword("Strong");
let pass3 = new SuperStrongPassword();
pass3.displayPassword("SuperStrong");
let pass4 = new FunnyPassword();
pass4.displayPassword("Funny");
