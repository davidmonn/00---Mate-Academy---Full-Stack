'use strict';

function sum(a) {
  return b => a + b;
}

// const f = sum(3);
// const result = f(5);
// const result = sum(3)(5)()();
const result = sum(3)(5);

console.log(result);
