let test = 'document';

// function removeVowels(doc) {
//     let result = '';

//     for(let i = 0; i < doc.length; i++) {
//         let vogais = 'aeiou'.includes(doc[i]);
//         if(!vogais) {
//             result += doc[i];
//         }
//     }
//     return result;
// }


function removeVowels(doc) {
    let result = '';
    
    for(let i of doc) {
        let vogais = 'aeiou'.includes(i);
        if(!vogais) {
            result += i;
        }
    }
    return result;
}

console.log(removeVowels(test));




//teste
// function returnVog(input) {
//     let result = '';

//     for(let i = 0; i < input.length; i++) {
//         let vogais = 'aeiou'.includes(input[i]);

//         if(vogais) {
//             result += input[i];
//         }
//     }
//     return result;
// }
// console.log(returnVog(test));