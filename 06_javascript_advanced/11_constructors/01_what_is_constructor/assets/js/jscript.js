function User(name, role = 'User') {

  this.name = name;
  this.role = role;
  this.friends = [];

}

User.prototype.getInfo = function() {
  return `${this.role} ${this.name} has ${this.friends.length} friends`;
}

const bob = new User('Bob');
const alice = new User('Alice', 'Admin');

const user = bob;
const use = alice;
console.log(user.getInfo());
console.log(use.getInfo());

