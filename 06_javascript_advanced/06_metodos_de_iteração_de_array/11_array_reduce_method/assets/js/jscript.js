const numbers = [1, 2, 3, 4, 5];

numbers.reduce = function(callback, inf) {
  let start = inf;
  let startIndex = 0;

  if (inf === undefined) {
    start = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    start = callback(start, this[i], i, this);
  }

  return start;
};


// const result = numbers.reduce((sum, n) => sum + n, 0); //15
// const result = numbers.reduce((sum, n) => sum + n, 1000); //1015
const result = numbers.reduce((sum, n) => sum + n, ''); //12345

console.log(result);
