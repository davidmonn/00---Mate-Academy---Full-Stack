/*
Objetivo: treinar for + índice.

Crie uma função que:

recebe uma string.
retorna um array com cada caractere separado

Crie uma função de seta greeter, que recebe uma string name como argumento e retorna uma saudação com o formato Hi, ${name}!.

Por favor, não use a palavra-chave return.

const getString = () => {
  const jobTitle = "I am a programmer";
  return jobTitle;
}
*/

let teste = 'David';

let greeter = name => `Hi, ${name}!`;
console.log(greeter(teste));



























const test = 'David oiu';

function caracteres(chars) {
    chars = chars.split('');
    let result = [];

    for(let char = 0; char < chars.length; char++) {
        result.push(chars[char]);
    }
    return result;
}

console.log(caracteres(test));

function ivertion(chars) {
    let inverterChar = chars.split('');
    let resultado = [];

    for(let inverter = inverterChar.length - 1; inverter >= 0; inverter--) {
        // resultado += inverter; nesse caso se estou convertento para um array pq funciona das duas formas ?
        resultado.push(inveter)

    }
    return resultado;
}

console.log(ivertion(test));






















function ivertion(chars) {
    let arrayDeChars = chars.split(''); // ["D", "a", "v", "i", "d"]
    let resultado = [];

    // 1. Começamos no 4 (arrayDeChars.length - 1)
    // 2. Enquanto o índice for maior ou igual a 0
    // 3. Diminuímos 1 a cada volta (inverter--)
    for(let inverter = arrayDeChars.length - 1; inverter >= 0; inverter--) {
        
        // Pegamos o caractere naquela posição e guardamos no array novo
        resultado.push(arrayDeChars[inverter]);
    }

    return resultado;
}