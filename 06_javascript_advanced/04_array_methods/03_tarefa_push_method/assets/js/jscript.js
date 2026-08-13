numbers = [];

numbers.push = function() {
  for (let value = 0; value < arguments.length; value++) {
    this[this.length] = arguments[value];
  }

  return this.length;
};

numbers.push(3,5);
console.log(numbers);
