let title = 'Trabalhando com Strings';

// // Essa função percorre a string caractere por caractere,
// // substituindo todas as ocorrências de um caractere específico
// // por outro valor definido
function replaceAll(input, char, replacement) {
    let result = '';
    for(let ch of input) {
        if(ch === char) {
            result += replacement;
        } else {
            result += ch;
        }
    }
    return result;
}

console.log(replaceAll(title, ' ', '-'));

/**
 * This comment gives you autocompletion
 * 
 * param {string} input
 */

// function replaceSpaces(input) {
//   let result = '';

//   // Write code here
//   for(let i = 0; i <= input.length - 1; i++) {
//     if(input[i] === ' ') {
//         result += '-';
//     } else {
//         result += input[i];
//     }
//   }

//   return result;
// }

function replaceSpaces(input) {
  let result = '';

  for(let i = 0; i < input.length; i++) {
    if(input[i] === ' ') {
        result += '-';
    } else {
        result += input[i];
    }
  }

  return result;
}

console.log(replaceSpaces('testando teste'));
