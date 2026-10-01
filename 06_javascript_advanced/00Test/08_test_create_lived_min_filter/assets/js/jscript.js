const carolus = { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905 };
const emma = { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956 };
const maria = { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724 };
const carel = { name: 'Carel Haverbeke', sex: 'm', born: 1796, died: 1837 };

const people = [carolus, emma, maria, carel];
const callback = createLivedMinFilter(60);

function createLivedMinFilter(age) {
  return (verif) => {
    const born = verif.born;
    const died = verif.died;

    return died - born >= age;
  };
}

console.log(
  people.filter(callback) // [carolus, emma]
);