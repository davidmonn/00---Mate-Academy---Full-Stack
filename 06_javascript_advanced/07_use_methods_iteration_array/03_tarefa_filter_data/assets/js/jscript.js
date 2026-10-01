const people = [
 { firstName: 'Lee', lastName: 'Haverbeke' },
 { firstName: 'Clara', lastName: 'Aernoudts' },
 { firstName: 'Jan', lastName: 'Rycke' },
 { firstName: 'Anna', lastName: 'Bernardus' },
];


// function filterPeople(people) {
//   return people.filter((names) => {
//     return names.firstName.length <= 4 && names.lastName.length > 8;
//   });
// }

// function filterPeople(people) {
//   return people.filter(function(names) {
//     return names.firstName.length <= 4 && names.lastName.length > 8;
//   });
// }

// arrow function
function filterPeople(people) {
  return people.filter((names) => (
    names.firstName.length <= 4 && names.lastName.length > 8
  ));
}

const result = filterPeople(people);

console.log(result);
