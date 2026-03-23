// function sumFromTo(min, max) {
//     let sum = 0;

//     for(let n = min; n <= max; n++) {
//         //Para entender melhor iremos imprimir:
//         console.log(n);
//         sum += n;
//     }

//     return sum;

// }

// console.log(`Result: ` + sumFromTo(1,5));

// function sumFromToStep(min, max, step = 1) {
//     let sum = 0;

//     for(let n = min; n <= max; n+= step) {
//         //Para entender melhor iremos imprimir:
//         console.log(n);
//         sum += n;
//     }

//     return sum;

// }

// console.log(`Result: ` + sumFromTo(1,5, 1));


function fatorial(fat) {
    //Como estamos trabalhando com multplicacao, sempre temos como incicial o 1.
    let result = 1;

    for(let n = 1; n <= fat; n++) {
        console.log(n)
        result *= n; 
    }
    return result;

}

console.log('Fatorial:', fatorial(5)); 