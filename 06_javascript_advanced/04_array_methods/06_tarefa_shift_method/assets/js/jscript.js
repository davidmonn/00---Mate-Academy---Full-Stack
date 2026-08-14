const numbers = [1,2,3,4];

numbers.shift = function() {
  const remove = this[0];

  if (this.length === 0) {
    return;
  }

  for (let value = 0; value < this.length - 1; value++) {
    this[value] = this[value + 1];
  }

  this.length = this.length - 1;

  return remove;
};


numbers.shift();
console.log(numbers);

