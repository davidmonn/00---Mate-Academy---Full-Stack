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

Object.setPrototypeOf(father, grandFather);
child.__proto__ = null;

Object.setPrototypeOf(child, father);
console.log(child.surname);
