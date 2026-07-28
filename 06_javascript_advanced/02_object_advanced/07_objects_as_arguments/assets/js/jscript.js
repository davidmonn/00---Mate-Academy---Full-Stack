'use strict';

const bob = {
    name: 'Bob',
    surname: 'Smith',
    partner: null,
};

const alice = {
    name: 'Alice',
    surname: 'Black',
    partner: null,
};

const peter = {
    name: 'Peter',
    surname: 'Silver',
    partner: null,
};

function marry(person1, person2) { 
    if(person1.partner) {
        person1.partner.partner = null;
    }

    if(person2.partner) {
        person2.partner.partner = null;
    }

    person1.partner = person2;
    person2.partner = person1;
}

marry(bob, alice);
marry(bob, {});

bob.partner.surname = bob.surname;

// console.log(bob.partner.name);
console.log(alice.surname);
