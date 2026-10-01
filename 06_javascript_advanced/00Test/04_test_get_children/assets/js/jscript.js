const carolus = {
  name: 'Carolus Haverbeke',
  father: 'Carel Haverbeke',
  mother: 'Maria van Brussel',
  // ...
};

const emma = {
  name: 'Emma de Milliano',
  father: 'Petrus de Milliano',
  mother: 'Sophia van Damme'
  // ...
};

const maria = {
  name: 'Maria de Rycke',
  father: 'Frederik de Rycke',
  mother: 'Laurentia van Vlaenderen',
  // ...
};

const carel = {
  name: 'Carel Haverbeke',
  father: 'Pieter Antone Haverbeke',
  mother: 'Livina Sierens',
  // ...
};

const people = [carolus, emma, maria, carel]

const pessoas = [carolus, emma, maria, carel]

function getChildren(people, person) {
  return people.filter((child) => {
    return child.father === person.name || child.mother === person.name;
  });
}

console.log(
  getChildren(people, carel)
);
