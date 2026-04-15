/*
isSpecialNumber(2); // 'Special!!'
// 2 — within the 0 and 5 interval

isSpecialNumber(9); // 'NOT!!'
// 9 > 5

isSpecialNumber(23); // 'Special!!'
// all digits are between 0 and 5

isSpecialNumber(38); // 'NOT!!'
// 8 > 5

*/

let test = 5;
function isSpecialNumber(n) {
    //Converter n para string
    n = n.toString();

    for(let i = 0; i < n.length; i++) {
        if(n[i] > 5) {
            return 'NOT!!'
        }
    }
    return 'Special!!';
}

console.log(isSpecialNumber(test));





















































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