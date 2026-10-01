const people = [
  { name: 'Carolus Haverbeke', born: 1832, died: 1905 },
  { name: 'Emma de Milliano', born: 1876, died: 1956 },
  { name: 'Maria de Rycke', born: 1683, died: 1724 },
  { name: 'Carel Haverbeke', born: 1796, died: 1837 },
];

function getPeopleWithCentury(people) {
  return people.map((user) => {
    const died = user.died;
    const verifCentury = Math.ceil(died / 100);

    return {
      ...user,
      century: verifCentury,
    };
  });
}

console.log(
  getPeopleWithCentury(people)
);
