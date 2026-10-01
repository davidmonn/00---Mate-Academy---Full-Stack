'use strict';

const myFriend = {
    name: 'Tita',
    age: 43,
};

Object.freeze(myFriend);

let guest = myFriend;

guest.age++;

guest = null;

console.log(myFriend);
