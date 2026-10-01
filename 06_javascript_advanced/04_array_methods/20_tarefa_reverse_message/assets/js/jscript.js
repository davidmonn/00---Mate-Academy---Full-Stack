const reverse = 'lliW eht laer milS ydahS esaelp dnats ?pu';

// #region Jeito 01

function reverseMessage(message) {
  let saveChars = '';
  let msg = '';

  for (let char = 0; char < message.length; char++) {
    if (message[char] !== ' ')  {
      saveChars = message[char] + saveChars;
    } else {
      msg += saveChars + ' ';
      saveChars = '';
    }
  }
  
  msg += saveChars;

  return msg;
}
 
// #endregion Jeito 01

// #region Jeito 02
/*
function revMsg(message) {
  let word = '';
  let words = [];

  for (let char = message.length - 1; char >= 0; char--) {
    if (message[char] !== ' ') {
      word += message[char];
    } else {
      words[words.length] = word;
      word = '';
    }
  }

  words[words.length] = word;

  let msg = '';

  for (let char = words.length - 1; char >= 0; char--) {
    msg += words[char];

    if (char > 0) {
      msg += ' ';
    }
  }

  return msg;
}
*/
// #endregion Jeito 02

// const teste = reverseMessage(reverse);
// console.log(teste);

const teste2 = revMsg(reverse);
console.log(teste2);
