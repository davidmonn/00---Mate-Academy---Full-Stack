/*
// single digit number
isJumping(9); // 'JUMPING'

// 7 and 9 differ by 2 instead of 1
isJumping(79); // 'NOT JUMPING'

// difference between same digits is 0
isJumping(7889); // 'NOT JUMPING'

// all adjacent digits differ by 1
isJumping(23454); // 'JUMPING'
*/

let test = 145;

// function isJumping(n) {
//     n = n.toString();

//     for(let num = 1; num < n.length; num ++) {
//         let val = Number(n[num]);
//         let valMenos = Number(n[num - 1]);

//         if(val !== valMenos +1 && val !== valMenos -1) {
//             return 'NOT JUMPING';
//         }
//     }
//     return 'JUMPING'
// }

function isJumping(n) {
    n = n.toString();

    let anterior = null;

    for (let i of n) {
        let atual = Number(i);

        if (anterior !== null) {
            if (atual !== anterior + 1 && atual !== anterior - 1) {
                return 'NOT JUMPING';
            }
        }

        anterior = atual;
    }

    return 'JUMPING';
}

console.log(isJumping(test));




// function isJumping(n) {
//     n = n.toString();

//     for(let i = 1; i < n.length; i++) {
//         let valor = Number(n[i]);
//         let conferirMen = Number(n[i - 1]);

//         if(valor !== conferirMen +1 && valor !== conferirMen -1) {
//             return 'NOT JUMPING';
//         }
//     }
//     return 'JUMPING';
// }

// console.log(isJumping(test));