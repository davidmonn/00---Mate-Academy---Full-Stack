'use strict';

const numbs = [1, 2, 3, 4];

// #region Exemplo 01
// function printValues(values) {
//   console.log('---------');

//   for (let i = 0; i < values.length; i++) {
//     const message = `Values is ${values[i]}`;

//     console.log(message);
    
//   }  
// }
// #endregion Exemplo 01

function printValues(
  values,
  format = (value) => `Value is ${value}`
) {
  console.log('---------');

  for (let i = 0; i < values.length; i++) {
    const message = format(values[i], i);

    console.log(message);
    
  }  
}

const test = printValues(numbs);
printValues(
  [10,20,30],
  (value, index) => `${index}: ${value}`
);
