'use strict';

// #region Desconstrucao Objeto
const bob = {
  name: 'Bob',
  surname: 'Smith',
  age: 33,
  isMarrired: true,
};

function printObject(user) {
  const {name, age, ...props} = user;

  console.log(props);
  
}

printObject(bob);

// #endregion Desconstrucao Objeto


// #region Descontrucao Array

const song = 'one two three four five';

function printArray(a, [x, , y, ...otherWords]) {
  // const [x, , y = 10, ...otherWords] = words;

  console.log(otherWords);
}

printArray(123, song.split(' '));

// #region Descontrucao Array
