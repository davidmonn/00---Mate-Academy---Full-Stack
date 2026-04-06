// 2 liters is enough for 25km (2/8 === 25/100)
// 2 litros = 25km
// se distancia maior que fuelReman..
// fuelCons... = consumo total

// && 

//

function makeDecision(fuelRemaining, distance, fuelConsumption) {
    let cons = 100 / fuelConsumption;

    if(fuelRemaining < 0 && fuelConsumption <= 0 && distance < 0) {
        return 'please, enter the valid data';
    } else if((fuelRemaining * cons) >= distance) {
        return 'reach gas station by themselves';
    } else {
        return 'ask for help';
    }
}

console.log(makeDecision(0,34,20));
