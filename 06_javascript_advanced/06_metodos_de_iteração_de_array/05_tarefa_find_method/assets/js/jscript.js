const numbers = [1, 2, 3, 4, 10, 8];

numbers.find = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};

const foundNumber = numbers.find(el => el > 4);

console.log(foundNumber);

