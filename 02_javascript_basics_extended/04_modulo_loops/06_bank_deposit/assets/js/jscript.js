// calculateProfit(1000, 5, 1); // 50
/*
Amouunt = Quantia
Percent = taxa de juros anual
period = Quantidade de anos
*/



function calculateProfit(amount, percent, period) {
    let acumulado = amount; // initialize acumulado on line 21

    for (let i = 0; i < period; i++) {
        acumulado += acumulado * (percent / 100); // update acumulado each period
    }
    return acumulado - amount; // return the accumulated profit
}

console.log(calculateProfit(20000, 4, 5));


// function calculateProfit(amount, percent, period) {
//     let acumulado = amount;

//     for(let i = 0; i < period; i++) {
//         result += acumulado * (percent / 100);
//     }
//     return acumulado - amount;
// }

// console.log(calculateProfit(1000, 5, 1));

//CERTO 01:
/*
function calculateProfit(amount, percent, period) {
    let acumulado = amount; // initialize acumulado on line 21

    for (let i = 0; i < period; i++) {
        acumulado += acumulado * (percent / 100); // update acumulado each period
    }
    return acumulado - amount; // return the accumulated profit
}
*/