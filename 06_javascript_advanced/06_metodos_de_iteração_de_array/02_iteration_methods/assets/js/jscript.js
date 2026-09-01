const words = ['one', 'two', 'three', 'four', 'five', 'six'];

function forEach(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

// Metodo forEach();
// const result = words.forEach((item, index) => 

// Metodo map
// const result = words.map((word, index) => word.length + index);

// Metodo filter
// const result = words.filter((word, index, items) => word.length > 3)
// const result = words.filter((word, index, items) => {
//   return word.length > 3;
// });

// METODO FIND AND findIndex
// const result = words.find((word, index, item) => word.length > 3);
// const result = words.findIndex((word, index, items) => {
//   console.log(word);
//   return word.length > 3
// })

// Metodo Some
// const result = words.some((word, index, items) => word.length >= 5);
// const result = words.some((word, index, items) => {
//   console.log(word);
  
//   return word.length > 5
// });

// Metodo every
// const result = words.every((word, index, items) => word.length >= 3);
const result = words.every((word, index, items) => {
  console.log(index, items);
  
  return word.length > 2
})

console.log(result);
