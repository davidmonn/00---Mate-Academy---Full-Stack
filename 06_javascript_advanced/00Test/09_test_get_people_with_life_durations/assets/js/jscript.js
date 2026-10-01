const people = [
  { name: 'Carolus Haverbeke', born: 1832, died: 1905 },
  { name: 'Emma de Milliano', born: 1876, died: 1956 },
  { name: 'Maria de Rycke', born: 1683, died: 1724 },
  { name: 'Carel Haverbeke', born: 1796, died: 1837 },
];

function getPeopleWithLifeDurations(people) {
  return people.map((users) => {
    const died = users.died;
    const born = users.born;
    const duration = died - born;

    return {
      ...users,
      lifeDuration: duration,
    };
  });
}

console.log(
  getPeopleWithLifeDurations(people)
);
