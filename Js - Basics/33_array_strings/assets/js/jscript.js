let text = 'one two three four five';
let words = text.split(' ');

// console.log(words);

function getShortWords(words, maxLength) {
    let result = [];
    for(let ind of words) {
        if(ind.length <= maxLength) {
            result.push(ind);
        }
    }
    return result.join(' ');
}
// Primeiro usamos o split para transformar a string em um array de palavras
// Depois a função percorre esse array e retorna apenas as palavras com tamanho menor ou igual ao maxLength
// split cria o array de palavras e a função filtra as menores
console.log(getShortWords(words, 3));