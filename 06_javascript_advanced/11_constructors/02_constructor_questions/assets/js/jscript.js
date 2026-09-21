'use strict';

// User.prototype = { constructor: User } #1
function User(name) {
  this.name = name;
}

// #1.test = f1
User.prototype.test = function() {
  console.log(111);
};

// admin -> #1
const admin = new User('John');

admin.test();
admin.test();
