'use strict';

const words = ['one', 'two', 'three', 'four', 'five', 'six'];


// words.runForEach = function(callback) {
//   console.log(this);
  
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// }

words.forEach((item, indice, items) => {
  console.log(item, indice, items);
  
})

// const result = words.forEach((item, index, items) => {
//   console.log(item, index, items)
// })

// console.log(result);

