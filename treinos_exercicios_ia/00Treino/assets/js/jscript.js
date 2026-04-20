/*
retorna um array com cada caractere separado.
*/

// Testes STRING
/*
const testStr = 'David Monteiro';

function separar(caracteres) {
    let armazenar = caracteres.split('');
    let result = [];

    for(let char = 0; char < armazenar.length; char++) {
        result.push(armazenar[char]);
    }
    return result;
}
console.log(separar(testStr));;


function separarForOf(chars) {
    let storeChars = chars.split('');
    let result = [];

    for(let char of storeChars) {
        result.push(char);
    }
    return result;
}
console.log(separarForOf(testStr));


function sepInvert(chars) {
    let storeInvert = chars.split('');
    let result = [];

    for(let char = storeInvert.length -1; char >= 0; char--) {
        result.push(storeInvert[char]);
    }
    return result;
}
console.log(sepInvert(testStr));

function sepInvertForOf(chars) {
    let storeInvert = chars.split('')
    let result = [];
    let count = chars.length - 1;

    for(let char of storeInvert) {
        result[count] = char;
        count--;
    }
    return result;
}
console.log(sepInvertForOf(testStr));

*/

// TESTES ARRAYS
/*
const testArr = ['David Monteiro'];
const testNumb = 12345;

function separarArrFor(chars) {
    let storeChars = chars.join('');
    let result = '';

    for(let char = 0; char < storeChars.length; char++){
        result += storeChars[char];
        if(char < storeChars.length -1) {
            result += '.';
        }
    }
    return result;
}

console.log(separarArrFor(testArr));
"hello world" → "ho wd"
*/

const test = "hello world";

function abbrFor(words) {
    let storeWords = words.split(' ');
    let result = [];

    for(let word = 0; word < storeWords.length; word++) {
        let first = storeWords[word][0];
        let last = storeWords[word][storeWords[word].length - 1];

        result.push(first + last);
    }
    return result.join(' ');
}
console.log(abbrFor(test));

function abbrFor2(words) {
    let storeWords = words.split(' '); // ['hello', 'world']
    let resultFirst = []; 

    for(let word = 0; word < storeWords.length; word++) {
        // Pega a primeira letra da palavra atual
        let primeira = storeWords[word][0]; 
        
        // Pega a última letra da palavra atual
        // Usamos o length da palavra que o loop está segurando agora
        let ultima = storeWords[word][storeWords[word].length - 1];

        // Guarda as duas juntas no seu array
        resultFirst.push(primeira + ultima);
    }
    
    // Transforma ['ho', 'wd'] em "ho wd"
    return resultFirst.join(' ');
}

console.log(abbrFor2(test)); // Saída: "ho wd"
