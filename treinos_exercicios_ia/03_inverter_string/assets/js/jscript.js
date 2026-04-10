let test = 'David';

function invertStr(inverte) {
    let armazen = '';

    for(let i = inverte.length -1; i >= 0; i--) {
        armazen += inverte[i];
    }

    return armazen;
}

console.log(invertStr(test));