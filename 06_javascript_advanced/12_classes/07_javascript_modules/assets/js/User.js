import { Human } from './Human.js';

export class User extends Human {
  friends = [];

  constructor(name, role = 'User') {
    super(name);

    this.role = role;
  }

  get fullName() {
    const { name, role } = this

    return `${role} ${name}`
  }

  printInfo() {
    const { friends, fullName } = this;

    console.log(`${fullName} has ${friends.length} friends.`);
    super.printInfo();
  }
}