const bob = {
    name: 'Bob',
    surname: 'Smith',
    partner: null,
};

function clone(source) {
    return Object.assign({}, source, {x: 123});
}

const bobCopy = clone(bob);

console.log(bobCopy === bob);
console.log(bobCopy.surname);
console.log(bobCopy);
