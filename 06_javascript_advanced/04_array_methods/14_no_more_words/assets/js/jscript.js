const wish = `Quero um corte de cabelo curto como o do meu irmão`;

function getOrder(wish, wordsCount) {
  let newStr = '';
  let count = 0;

  if (wordsCount === 0) {
    return '';
  }

  for (let value = 0; value < wish.length; value++) {
    if (wish[value] === ' ') {
      count++;

      if (count === wordsCount) {
        return newStr;
      }
    }

    newStr += wish[value];
  }

  return newStr;
}

const teste = getOrder(wish, 0);
console.log(teste);
