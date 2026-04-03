let n = 'David';

function decryptMessage(message) {
  let inv = '';

  for(let ind = message.length - 1; ind >= 0; ind--) {
    inv += message[ind];
  }
  return inv;
}


console.log(decryptMessage('David'));