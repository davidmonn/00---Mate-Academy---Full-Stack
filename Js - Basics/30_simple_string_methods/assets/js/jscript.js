function replaceAll(input, char, replacement) {
    let result = '';

    for(let i of input) {
        if(i === char) {
            result += replacement;
        } else {
            result += i;
        }
    }
    return result;
}

let teste = 'Trabalhando com Strings';
let result = replaceAll(teste, ' ', '-');
console.log(replaceAll(teste, ' ', '-'));


//Funcoes JS

console.log(result.toUpperCase());
console.log(result.toLowerCase());



console.log(teste.replaceAll('com', '-'));

console.log(teste.indexOf('com'));