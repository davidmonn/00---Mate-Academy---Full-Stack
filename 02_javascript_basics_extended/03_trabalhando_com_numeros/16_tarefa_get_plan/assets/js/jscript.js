/*
startProduction = comeco de producao
numberOfMonths = quantidade de meses
percent = porcentagem

*/


function getPlan(startProduction, numberOfMonths, percent) {
    let resultPorcent = [];

    for(let i = 0; i < numberOfMonths; i++) {
        startProduction = Math.floor(startProduction + (startProduction * (percent / 100)));
        resultPorcent.push(startProduction)
    }
    
    return resultPorcent;

}

console.log(getPlan(10, 4, 30));