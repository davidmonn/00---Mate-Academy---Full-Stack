const rooms = [
  {name: 'David', square: 18},
  {name: 'Tita', square: 12},
  {name: 'Suzana', square: 25},
  {name: 'Toninha', square: 16},
  {name: 'Alexia', square: 20},
  {name: 'Adao', square: 6},
];

const result = [...rooms].sort((rom1, rom2) => {
  // return rom1.name.localeCompare(rom2.name);
  return rom2.square - rom1.square;
});

console.log(result);
