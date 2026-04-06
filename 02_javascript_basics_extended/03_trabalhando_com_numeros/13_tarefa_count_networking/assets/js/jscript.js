// Crie uma função countNetworking que receba dois parâmetros: a 
// duração da quarentena quarantineLength em meses e 
// uma frequência de festas (1 festa por meses de frequência).

function countNetworking(quarantineLength, frequency) {
    let result = 0;

    let start = quarantineLength + 1;

    for (let i = start; i <= 12; i++) {
        if ((i - start) % frequency === 0) {
            result++;
        }
    }

    return result;
}

console.log(countNetworking(3,1));