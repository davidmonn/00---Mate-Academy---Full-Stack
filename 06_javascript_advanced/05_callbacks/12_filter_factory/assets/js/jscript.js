const candies1 = ['KitKat', 'Nuts', 'Lion', 'Mars', 'Snickers', 'Bounty', 'Nuts'];
const candies2 = ['Nuts', 'Nuts', 'Nuts', 'Snickers', 'Snickers', 'Snickers', 'Mars'];

const contains0 = candy => candy.includes('o');
const isLessThan5 = candy => candy.length < 5;

function filter(candies, isGoodEnough) {
  const result = [];

  for (const candy of candies) {
    if(isGoodEnough(candy)) {
      result.push(candy);
    }
  }

  return result;
}

function createSizeFilter(size) {
  return (candy) => candy.length <= size;
}

// Usamos duas funções nesse caso, uma dentro da outra.
//
// Dessa forma, a função externa recebe o tamanho desejado
// e retorna uma função que será usada como callback.
//
// Assim, podemos definir o size uma única vez e depois
// verificar vários candies usando essa callback.

// function createSizeFilter(size) {
//   return function(candy) {
//     return candy.length <= size;
//   };
// }


const isUpToValue = createSizeFilter(6);


console.log(
  filter(candies1, isUpToValue),
);

console.log(
  filter(candies2, isLessThan5)
);
