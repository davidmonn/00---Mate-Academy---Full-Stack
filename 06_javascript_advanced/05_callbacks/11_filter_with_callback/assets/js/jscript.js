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

console.log(
  filter(candies1, contains0),
);

console.log(
  filter(candies2, isLessThan5)
);


// #region MyCode
// function filter(candys, back) {
//   let save = [];

//   for (let candy of candys) {
//     if(back(candy) == true) {
//       save.push(candy)
//     }
//   }

//   return save;
// }
// #endregion MyCode