// debugger;

let test = [3,5,6,8,9,10,15];

function mediaParFor(valores) {
    let sumPar = 0;
    let cont = 0;

    for(let valor of valores) {
        if(valor % 2 === 0) {
            cont++;
            sumPar += valor;
        }
    }
    return sumPar / cont;
}

console.log(mediaParFor(test));

function mediaParOf(values) {
    let contador = 0;
    let somarPar = 0;

    for(let i = 0; i < values.length; i++) {
        if(values[i] % 2 === 0) {
            contador++;
            somarPar += values[i];
        }
    }
    return somarPar / contador;
}

console.log(mediaParOf(test));