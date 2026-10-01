const people = [
 { id: 114, firstName: 'Clara', lastName: 'Aernoudts' },
 { id: 118, firstName: 'Jan', lastName: 'Rycke' },
 { id: 101, firstName: 'Lee', lastName: 'Haverbeke' },
 { id: 201, firstName: 'Anna', lastName: 'Bernardus' },
];

function getPersonById(id, people) {
  const user = people.find((search) => search.id === id);

  if (user) {
    return user;
  }

  return null;
}

console.log(
  getPersonById(114, people)
);
