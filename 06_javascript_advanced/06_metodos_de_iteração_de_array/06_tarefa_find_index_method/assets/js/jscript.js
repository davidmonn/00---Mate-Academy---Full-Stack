const numbers = [1, 2, 3, 4, 10, 8];

numbers.findIndex = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }

  return -1;
};

const result = numbers.findIndex((val) => {
  return val === 4;
});

console.log(result);
