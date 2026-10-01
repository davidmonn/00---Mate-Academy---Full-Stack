const people = [
 { id: 118, firstName: 'Jan', lastName: 'Rycke' },
 { id: 101, firstName: 'Lee', lastName: 'Haverbeke' },
 { id: 114, firstName: 'Clara', lastName: 'Aernoudts' },
 { id: 201, firstName: 'Anna', lastName: 'Bernardus' },
 { id: 204, firstName: 'Lieven', lastName: 'Causmaecker' },
 { id: 205, firstName: 'Maria', lastName: 'Sturm' },
];

function getEmployeesList(people) {
  return people
    .map(person => `${person.firstName} ${person.lastName}`)
    .sort((nameA, nameB) => nameA.localeCompare(nameB));
}

console.log(
  getEmployeesList(people)
);

