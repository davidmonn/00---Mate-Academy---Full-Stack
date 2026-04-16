/*
// 'NASA'
makeAbbr('national aeronautics space administration');

// 'CPU'
makeAbbr('central processing unit');

// 'SMILES'
makeAbbr('simplified molecular input line entry specification');
*/


// For
const test = 'national aeronautics space administration';

function abreviation(chars) {
    let store = chars[0];

    for(let char = 0; char < chars.length; char++) {
        let storeChar = chars[char];

        if(storeChar === ' ') {
            store += chars[char + 1];
        }
    }
    return store.toUpperCase();
}
console.log(abreviation(test));



// For Of
const test2 = 'national aeronautics space administration';

function abreviar(letras) {
    let guardarLetras = letras[0];
    let i = 0;

    for(let letra of letras) {
        if(i > 0 && letras[i - 1] === ' ') {
            guardarLetras += letra;
        }

        i++;
    }
    return guardarLetras.toUpperCase();
}

console.log(abreviar(test2));