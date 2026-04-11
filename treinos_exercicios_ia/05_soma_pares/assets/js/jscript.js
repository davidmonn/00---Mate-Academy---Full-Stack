let test = [2,4,5,6,8];

function sumPar(val) {
    let result = 0;

    for(let i = 0; i < val.length; i++) {
        if(val[i] % 2 === 0) {
            result += val[i];
        }
    }
    return result;
}

console.log(sumPar(test));

function somaPar(input) {
    let resul = 0;

    for(let valor of input) {
        if(valor % 2 === 0) {
            resul += valor;
        }
    }
    return resul;
}

console.log(somaPar(test));