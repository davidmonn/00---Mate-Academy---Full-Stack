const people = [
 { id: 118, firstName: 'Jan', lastName: 'Rycke' },
 { id: 101, firstName: 'Lee', lastName: 'Haverbeke' },
 { id: 114, firstName: 'Clara', lastName: 'Aernoudts' },
 { id: 201, firstName: 'Anna', lastName: 'Bernardus' },
];

const getPersonIndex = (people, nameEndsWith) => {
  const result = people.findIndex((user) => {
    return user.firstName.endsWith(nameEndsWith);
  });

  if (result === -1) {
    return null;
  }

  return result;
};

console.log(
  getPersonIndex(people, 'a'),
  getPersonIndex(people, 'k'),
);

