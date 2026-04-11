let test = [1,3,4,6,16,18,2];

// For
function maiorParFor(getPar) {
    let maior = 0;

    for(let i = 0; i < getPar.length; i++) {
        if(getPar[i] % 2 === 0 && getPar[i] > maior) {
            maior = getPar[i];
        }
        
    }

    return maior;
}

console.log(maiorParFor(test));

// For Of
function maiorParOf(pares) {
    let maiorPar = null;

    for(let par of pares) {
        if(par % 2 === 0) {
            if(maiorPar === null || par > maiorPar) {
                maiorPar = par;
            }
        }
    }
    return maiorPar;
}

console.log(maiorParOf(test));
