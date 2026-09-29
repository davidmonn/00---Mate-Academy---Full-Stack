'use strict';

class Human {
  age = 0;

  constructor(name) {
    this.name = name;
  }

  celebrateBirthday() {
    this.age++;

    return console.log(`${this.name} is now ${this.age}`);
  }

  printInfo() {
    const { age, name } = this;

    console.log(`${name} is ${age}`);
  }
}

class User extends Human {
  friends = [];

  constructor(name, role = 'User') {
    super(name);
    this.role = role;
  }

  get fullName() {
    return `${this.role} ${this.name}`;
  }

  printInfo() {
    const { friends, fullName } = this;
    super.printInfo();

    console.log(`${fullName} has ${friends.length} friends.`);
  }
}

const bob = new User('Bob');
const david = new Human('David');

console.log(bob);
