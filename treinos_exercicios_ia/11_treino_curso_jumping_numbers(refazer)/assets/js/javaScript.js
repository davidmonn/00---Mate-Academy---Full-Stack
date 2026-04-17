// For
const test = '123';

function jumpNumber(numbers) {
    numbers = numbers.toString();
    
    for(let number = 1; number < numbers.length; number++) {
        let convertNumb = Number(numbers[number]);
        let convertNumbSum = Number(numbers[number - 1]);
        
        if(convertNumb + 1 !== convertNumbSum && convertNumb -1 !== convertNumbSum) {
            return 'NOT JUMPING';
        }
    }
    return 'JUMPING';
}

console.log(jumpNumber(test));




//For of
const test2 = '321';

function numerosCerto(numeros) {
    numeros = numeros.toString();
    let indice = 0;

    for(let numero of numeros) {
        if(indice > 0) {
            let iterar = Number(numero);
            let iterarSub = Number(numeros[indice - 1]);

            if(iterar + 1 !== iterarSub && iterar - 1 !== iterarSub) {
                return 'NOT JUMPING';
            }
        }

        indice++;
    }

    return 'JUMPING';
}

console.log(numerosCerto(test2));