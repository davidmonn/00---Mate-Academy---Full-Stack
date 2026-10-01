const words = ['one', 'two', 'three', 'four', 'five', 'six'];

// const result = words
//   .reduce((prev, index, item) => {
//     console.log(prev, item, index);
    

//   return prev + index;
// }, '')

// const result = words
//   .reduce((prev, index) => prev + index, '')

// concatenando indices
// const result = words
//   .reduce((prev, index, i) => prev + i, '')

// reduce com objeto
const result = words
  .reduce((prev, item, i) => {
    return {...prev, [item]:i}
  } ,'')

console.log(result);
