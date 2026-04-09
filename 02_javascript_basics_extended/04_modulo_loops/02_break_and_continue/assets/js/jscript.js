// debugger;

//Obtendo apenas pares
// for(let i = 0; i < 16; i++) {

//     if(i % 2 === 0 && i <= 16) {
//         console.log(i);    
//         console.log('Ok');
//     }

// }
// console.log('--- FEITO ---');

//Continue
for(let i = 0; i < 16; i++) {

    if(i % 2 !== 0 && i <= 16) {
        continue;
    }

    console.log(i);
    console.log('Ok');
    
}
console.log('--- FEITO ---');