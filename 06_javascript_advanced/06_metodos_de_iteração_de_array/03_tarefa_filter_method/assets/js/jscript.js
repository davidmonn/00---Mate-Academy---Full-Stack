'use strict';

const numbers = ['one', 'two', 'three', 'four', 'five'];

numbers.filter = function(callback) {
  const filteredItems = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filteredItems[filteredItems.length] = this[i];
    }
  }

  return filteredItems;
};

console.log(
  numbers.filter((numb, index, numbs) => {
    return numb.length > 3;
  })
);
