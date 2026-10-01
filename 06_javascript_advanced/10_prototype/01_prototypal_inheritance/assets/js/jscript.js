const grandFather = {
  name: 'grandFather',
  surname: 'Surname',
}

const father = {
  name: 'Father',
}


const child = {
  name: 'child',
}

// child -> father -> grandFather -> Object.prototype
Object.setPrototypeOf(father, grandFather);
Object.setPrototypeOf(child, father);

console.log(child.surname);
console.log(Object.getPrototypeOf(father));

Object.setPrototypeOf(child, null);
console.log(child.surname);

console.log(Object.hasOwn(child, 'name'));
// Nao ira funcionar se estiver com set null
console.log(child.hasOwnProperty('name'));
