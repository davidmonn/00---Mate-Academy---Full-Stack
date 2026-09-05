const peop = [
  ['Mike', 'Anderson'],
  ['Lori IV', 'Pirs'],
];

// const mapDatabase = (people) => {
//   return people.map((name) => ({firstName: name[0], lastName: name[1]}))
// };

const mapDatabase = function(people) {
  return people.map(function(name) {
    return {
      firstName: name[0],
      lastName: name[1]
    };
  });
};

const result = mapDatabase(peop);
console.log(result);
