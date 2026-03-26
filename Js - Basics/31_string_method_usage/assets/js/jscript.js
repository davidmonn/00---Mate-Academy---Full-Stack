// function convertToLowerCase(input) {
//   let minusc = '';

//   for(let verif of input) {
//     minusc += verif.toLowerCase();
//   }

//   return minusc;

// }

// console.log(convertToLowerCase('Teste Teste'));


// function restoreSpaces(input) {
//   let spc = '';

//   for(let spac of input) {
//     // spc += spac.replaceAll('-', ' ');
//     if(spac === '-') {
//       spc += ' ';
//     } else {
//       spc += spac;
//     }
//   }

//   return spc;

// }

// console.log(restoreSpaces('teste-teste-teste'));

// function isSubstring(phrase, part) {
    
//     return phrase.includes(part);

// }

// console.log(isSubstring('teste teste'))

// function getPosition(text, word) {
  
//   return text.indexOf(word);

// }

function countVowels(input) {
    let value = 0;

    for(let ch of input) {
        //Aqui ira primeiro checar se e uma vogal
        let isVowel = 'aeiouyAEIOUY'.includes(ch);
        if(isVowel) {
            value++;
        }
    }
    return value;
}

console.log(
    countVowels('Hello Word!'),
    countVowels('aeiouyAEIOUY'),
    countVowels('')
);

function countLatters(input) {
    let value = 0;
    
    for(let ch of input) {
        //Aqui ira primeiro checar se e uma vogal
        let isLatters = ch.toLowerCase() != ch.toUpperCase();
        if(isLatters) {
            value++;
        }
    }
    return value;
}

console.log(
    countLatters('Hello Word!'),
    countLatters('aeiouyAEIOUY'),
    countLatters('')
);