const numbers = [5, 6, 1, 4, 2, 5];

numbers.reverse = function() {
  for (let value = 0; value < this.length / 2; value++) {
    const save = this[value];

    this[value] = this[this.length - 1 - value];
    this[this.length - 1 - value] = save;
  }

  return this;
};

const teste = numbers.reverse();
console.log(teste);
