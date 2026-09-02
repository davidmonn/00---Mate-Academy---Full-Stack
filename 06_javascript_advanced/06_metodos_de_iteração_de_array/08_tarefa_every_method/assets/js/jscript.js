const numbers = [1, 2, 3, 4, 10, 8];

numbers.every = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === false) {
      return false;
    }
  }

  return true;
};

const result = numbers.every(r => r > 0);
console.log(result);
