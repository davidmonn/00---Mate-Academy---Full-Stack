const intro = ['one', 'two', 'three', 'four', 'five', 'six'];

const result = intro
  .map((intro, indice) => ({nome: intro, indice,}))
  .filter(({ nome, indice}) => nome.length > indice)
  // .some(({nome, indice}) => nome[indice] === 'o')
  .find(({nome, indice}) => nome[indice] === 'o')

console.log(result);
