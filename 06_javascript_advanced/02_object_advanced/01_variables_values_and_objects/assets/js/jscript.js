'use strict';

const myName = 'David';
let myAge = '29';

myAge = 123;

let me = {
    name: 'David',
    age: 29,
};

let guest = me;

guest.age = 123;

console.log(me.age);
console.log(guest.age);