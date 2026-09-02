const numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.map = function(callback) {
  const valueMap = [];

  for (let i = 0; i < this.length; i++) {
    valueMap[i] = callback(this[i], i, this);
  }

  return valueMap;
};

console.log(
  numbers.map((value) => {
    return value + 10
  })
);
