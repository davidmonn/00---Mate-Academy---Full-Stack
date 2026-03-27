let distances = [20, 40, 10, 30];

//Soma for

// function sum(values) {
//     //Valor para ir amazenando a soma
//     let total = 0;
//     // Aqui nao usamos o <= por conta da contagem do length ser diferente da do indice
//     for(let i = 0; i < values.length; i++) {
//         //Aqui temos a soma receendo o valor do parametro com [i]
//         total += values[i];
//     }
//     return total;
// }

//Soma for of

// function sum(values) {
//     let total = 0;

//     // No for...of pegamos diretamente o VALOR, pois o "i" recebe cada valor de values
//     for(let i of values) {
//         total += i;
//     }
//     //Aqui usamos o values para pegar a quantidade de valores que tem no caso 4.
//     return total;
// }

//Media for of

// function average(values) {
//     let total = 0;

//     // No for...of pegamos diretamente o VALOR, pois o "i" recebe cada valor de values
//     for(let i of values) {
//         total += i;
//     }
//     //Aqui usamos o values para pegar a quantidade de valores que tem no caso 4.
//     return total / values.length;
// }

//Minimo for of
// function getMinimum(values) {
//     //Nesse caso se nossa array estiver vazio sera retornado undefined. Para contornar isso podemos fazer:
//     if(values.length == 0) return 0;

//     // Usamos values[0] como valor inicial para comparação
//     let min = values[0];

     
//     for(let i of values) {
//         if(i < min) {
//             min = i;
//         }
//     }
//     return min;
// }

function getMax(values) {
    if(values.length == 0) return 0;
    let max = 0;

    for(let i of values) {
        if(i > max) {
            max = i;
        }
    }
    return max;
}

console.log(getMax(distances));