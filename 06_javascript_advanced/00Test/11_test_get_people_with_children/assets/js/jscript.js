const people = [
  { name: 'Carolus Haverbeke', father: 'Carel Haverbeke', mother: 'Maria van Brussel' },
  { name: 'Emma de Milliano', father: 'Petrus de Milliano', mother: 'Sophia van Damme' },
  { name: 'Laurentia Haverbeke', father: 'Jan Haverbeke', mother: 'Maria de Rycke' },
  { name: 'Maria de Rycke', father: 'Frederik de Rycke', mother: 'Laurentia van Vlaenderen' },
  { name: 'Carel Haverbeke', father: 'Pieter Antone Haverbeke', mother: 'Livina Sierens' },
  { name: 'Elisabeth Haverbeke', father: 'Jan Haverbeke', mother: 'Maria de Rycke' },
];

const [carolus, emma, laurentina, maria, carel, elisabeth] = getPeopleWithChildren(people);


function getPeopleWithChildren(people) {
  return people.map((child) => {
    const children = people.filter((verif) => {
      return verif.father === child.name || verif.mother === child.name;
    });

    return {
      ...child,
      children,
    };
  });
}

console.log(
  carolus.name, // 'Carolus Haverbeke'
  carolus.children.length, // 0
);

console.log(
  maria.name, // 'Maria de Rycke'
  maria.children.length, // 2
  maria.children[0] === laurentina, // true
  maria.children[1] === elisabeth, // true
);