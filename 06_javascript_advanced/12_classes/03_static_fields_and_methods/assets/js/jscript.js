'use strict';
const test = [1,2,3,4,5];
const test2 = [
  {
    nome: 'David',
    idade: 29,
    hobby: 'Estudar, tocar violao e jogar'
  },
  {
    nome: 'Suzana',
    idade: 27,
    hobby: 'Assistir'
  },
];

class User {
  static ROLE_USER = 'User';
  static ROLE_ADMIN = 'Admin';

  static getAverageAge(users) {
    const sum = users.reduce((total, user) => total + user.age, 0)

    return sum / users.length;
  }
  
  friends = [];
  age = 18;

  constructor(name, role = User) {
    this.name = name;
    this.role = role;
  }

  getInfo() {
    const { role, name, friends } = this;

    return `${role} ${name} has ${friends.length} friends.`;
  }
}

const bob = new User('Bob', User.ROLE_ADMIN);
// const david = new User('David', User.ROLE_USER);


console.log(User.getAverageAge([bob]));
console.log(
  Array.isArray(test2),
  String.fromCodePoint(123),
  Object.hasOwn('sqwer', 'length')
);
