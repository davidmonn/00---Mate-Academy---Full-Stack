/*
[ 'ROBOT', // primeira palavra da entrada
  'OBOTR', // em seguida, com a ordem dos caracteres rearranjada
  'BOTRO',
  'OTROB',
  'TROBO' ]
*/

let test = 'robot';

function scrollingText(word) {
    let result = [];
    word = word.toUpperCase();

    for(let i = 0; i < word.length; i++) {
        result.push(word);
        word = word.slice(1) + word[0];
    }
    return result;
}

console.log(scrollingText(test));