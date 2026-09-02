const numbers = [1, 2, 3, 4, 10, 8];

numbers.some = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }

  return false;
};

const result = numbers.some(r => r < 0);
console.log(result);
