'use strict';

function User(name, age = 0) {
  this.name = name;
  this.age = age;
}

console.log(this);

User.prototype.celebrateBirthday = () => {
  this.age++;

  console.log(`${this.name} is now ${this.age}`);
}

const james = new User('James', 39);
james.celebrateBirthday();

/*
Browser Global    this === window
() => {}          this === extraido do closure
f()               this === undefined
obj.method()      this === obj before
new f()           this === undefined

f.call(obj)       this === obj
f.apply(obj)      this === obj
f.bind(obj)()     this === obj
*/