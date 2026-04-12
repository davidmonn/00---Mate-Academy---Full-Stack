const test = [2,6,15,3,8,9,12];

function somarMaiorQFor(values) {
    let saveCont = [];
    let operator = 0;

    for(let value = 0; value < values.length; value++) {
        if(values[value] > 10) {
            saveCont.push(values[value]);
            operator += values[value];
        }
    }
    return `Valores encontrados: [${saveCont}] soma: ${operator}`;
}

console.log(somarMaiorQFor(test));

function somarMaiorQOf(valores) {
    let contador = [];
    let soma = 0;

    for(let valor of valores) {
        if(valor > 10) {
            contador.push(valor);
            soma += valor;
        }
    }
    return `Valores encontrados: [${contador}] soma: ${soma}`;
}

console.log(somarMaiorQOf(test));