/*
isTidy(12); // true - dígitos estão em ordem crescente
isTidy(32); // false - dígitos estão em ordem decrescente
isTidy(1024); // false - 1 > 0
isTidy(3445); // true - dígitos iguais podem estar lado a lado
isTidy(13579); // true - dígitos estão em ordem crescente
*/


let test = 123562;

function isTidy(n) {
    n = n.toString();
    
    for(let i = 1; i < n.length; i++) {
        if(n[i] < n[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(isTidy(test));