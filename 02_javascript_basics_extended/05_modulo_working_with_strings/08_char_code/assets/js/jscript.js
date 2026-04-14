const mensagem = 'Ola, mundo!';

console.log(mensagem);

for(let indice = 0; indice < mensagem.length; indice++) {
    let codigoUtf = mensagem.charCodeAt(indice);
    console.log(mensagem[indice], codigoUtf, String.fromCharCode(codigoUtf));
}



















// const test = '2';

// function isSpecialNumber(n) {
//     n = n.toString();

//     for(let i = 0; i < n.length; i++) {
//         if(n[i] > 5) {
//             return 'NOT!!';
//         }
//     }
//     return 'Special!!';
// }

// console.log(isSpecialNumber(test));