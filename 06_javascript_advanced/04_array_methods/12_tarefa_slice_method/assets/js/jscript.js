const numbers = [1, 2, 3, 4, 5, 6];

numbers.slice = function(quant = 0, end = this.length) {
  const copy = [];
  let start = quant;
  let last = end;

  if (quant < 0) {
    start = this.length + quant;
  }

  if (start < 0) {
    start = 0;
  }

  if (end < 0) {
    last = this.length + end;
  }

  if (last < 0) {
    last = 0;
  }

  if (last > this.length) {
    last = this.length;
  }

  for (let value = start; value < last; value++) {
    copy[copy.length] = this[value];
  }

  return copy;
};


const teste = numbers.slice(0, 56);
console.log(teste);
