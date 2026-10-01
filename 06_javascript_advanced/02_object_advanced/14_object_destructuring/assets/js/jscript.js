const bob = {
    name: 'Bob',
    surname: 'Smith',
    partner: null,
};

const bobCopy = clone(bob);

function clone({name: firstName, surname, age = 10}) {
    return {
        name: firstName,
        surname,
        age,
    };
}

console.log(bobCopy);

