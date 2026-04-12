const test = [1,5,6,8,15,20,9,22];

//For+
function maiorQFor(values) {
    let cont = 0;

    for(let value = 0; value < values.length; value++) {
        if(values[value] > 10) {
            cont++;
        }
    }
    return cont;
}

console.log(maiorQFor(test));


//For of
function maiorQOf(valores) {
    let guardaValor = 0;

    for(let valor of valores) {
        if(valor > 10) {
            guardaValor++;
        }
    }

    return guardaValor;
}

console.log(maiorQOf(test));