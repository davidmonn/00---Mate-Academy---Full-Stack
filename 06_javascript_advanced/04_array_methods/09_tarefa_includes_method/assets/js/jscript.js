const numbers = [1, 2, 3, 4, 5];

numbers.includes = function(number, n = 0) {
  let verif = n;

  if (verif < 0) {
    verif = this.length + verif;

    if (verif < 0) {
      verif = 0;
    }
  }

  for (let value = verif; value < this.length; value++) {
    if (number === this[value]) {
      return true;
    }
  }

  return false;
};


const teste = numbers.includes(5, -2);
console.log(teste);
