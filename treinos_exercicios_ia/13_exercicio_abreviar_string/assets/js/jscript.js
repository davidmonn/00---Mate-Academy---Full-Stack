// const test = 'Hello Word';

// function firstChars(chars) {
//     let words = chars.split(' ');
//     let result = '';

//     for (let word of words) {
//         result += word[0] + word[word.length - 1] + ' ';
//     }

//     return result.trim();
// }

// console.log(firstChars(test));

/*
Crie uma função chamada multiply.
Passe os parâmetros a e b para a função.
Retorne o produto dos parâmetros da função.
Se o parâmetro b não for passado para a função, use 1 como valor padrão.
*/

function multiply(a = 1,b = 1) {
    const result = a * b;

    return result;
}

console.log(multiply(24))