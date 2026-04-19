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

function separarArrForOf(chars) {
    let storeArr = chars.join('');
    
    if(storeArr)

}

console.log(separarArrForOf(testArr));