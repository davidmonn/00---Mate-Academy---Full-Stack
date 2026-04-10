/*
splitString('123456'); // ['12', '34', '56']
splitString('ab cd ef'); // ['ab', ' c', 'd ', 'ef']
splitString('abc'); // ['ab', 'c_']
splitString(' '); // [' _']
splitString(''); // []
*/

function splitString(str) {
    let order = [];

    for(let i = 0; i < str.length; i+= 2) {
        let separar = str.slice(i, i + 2);

        if(separar.length === 1) {
            separar += '_';
        }
        order.push(separar);
    }

    return order;
}

console.log(splitString('123456'));
console.log(splitString('abc'));

// function splitString(str) {
//     let order = []; // cria um array vazio para armazenar os pares

//     for (let i = 0; i < str.length; i += 2) { // percorre a string de 2 em 2
//         let parte = str.slice(i, i + 2); // pega 2 caracteres a partir da posição i

//         if (parte.length === 1) { // verifica se veio apenas 1 caractere (caso ímpar)
//             parte += '_'; // adiciona "_" no final
//         }

//         order.push(parte); // adiciona o par (ou caractere ajustado) no array
//     }

//     // retorna o array final
//     return order;
// }

// // teste
// console.log(splitString('abcde')); // ['ab', 'cd', 'e_']

//OU
/*
for (let i = 0; i < str.length; i += 2) {
    if (str.slice(i, i + 2).length === 1) {
        order.push(str.slice(i, i + 2) + '_');
    } else {
        order.push(str.slice(i, i + 2));
    }
}
*/