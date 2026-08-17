const bob = {
    name: 'Bob',
    surname: 'Smith',
    partner: null,
};

function clone(source) {
    return Object.assign({}, source, {x: 123});
}

/*
function clone(source) {
    this.partner = 'no';
    return user = Object.assign({}, source, {partner: this.partner});
}
*/
const bobCopy = clone(bob);

console.log(bobCopy === bob);
console.log(bobCopy.surname);
console.log(bobCopy);
