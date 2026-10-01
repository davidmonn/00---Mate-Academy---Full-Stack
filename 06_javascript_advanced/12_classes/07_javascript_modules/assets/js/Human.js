export class Human {
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

    return console.log(`${name} ${age}`);
  }
}