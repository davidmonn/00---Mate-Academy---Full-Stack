const carolus =  { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905 };
const emma = { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956 };
const maria = { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724 };
const carel = { name: 'Carel Haverbeke', sex: 'm', born: 1796, died: 1837 };

const people = [carolus, emma, maria, carel];

function createSorterBy(field) {
  return (a, b) => {
    if (a[field] < b[field]) {
      return -1;
    }

    if (a[field] > b[field]) {
      return 1;
    }

    return 0;
  };
}
