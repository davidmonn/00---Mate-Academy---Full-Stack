const grandFather = {
  name: 'grandFather',
  surname: 'Surname',
}

const father = {
  name: 'Father',
  // __proto__: grandFather,

  sayHi() {
    console.log(`Hi, I am ${this.name} ${this.surname}`);
  },
}

Object.setPrototypeOf(father, grandFather);

const child = {
  name: 'Child',
  // __proto__: father,
}

Object.setPrototypeOf(child, father);

father.sayHi();
child.sayHi();

// console.log(father.name, father.surname);
// console.log(child.name, child.surname);
