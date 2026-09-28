'use strict';

function User(name, role = 'User') {
  this.name = name;
  this.role = role;
  this.friends = [];
}

/*
User.prototype.getInfo = function () {
  const { role, name, friends } = this;

  return `${role} ${name} has ${friends.length} friends.`;
}

const bob = new User('Bob')

console.log(
  bob.getInfo(),
);
*/

class Human {
  friends = [];

  constructor(name, role = 'User') {
    this.name = name;
    this.role = role;
  }

  get fullName() {
    return 'Teste'
  }

  getInfo() {
    const { role, name, friends } = this;

    return `${role} ${name} has ${friends.length} friends.`;
  };
}

const bob = new Human('Bob');

console.log(Human.prototype);
console.log(bob.getInfo());
console.log(bob.fullName);
console.log(bob);
