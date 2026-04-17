const test = 123;

function crescente(number) {
    number = number.toString();
    let ind = 0;

    for(let i of number) {
        const iterar = Number(i);
        const iterarSub = Number(number[ind - 1]);

        if(ind > 0) {
            if(Math.abs(iterar - iterarSub) != 1) {
                return 'NOT JUMPING';
            }
        }
        ind++;
    }
    return 'JUMPING';
}

console.log(crescente(test));












































/*
function crescente(valores) {
    let convertStr = valores.toString();

    for(let valor = 1; valor < convertStr.length; valor++) {
        let num = Number(convertStr[valor]);
        let numSub = Number(convertStr[valor - 1]);

        if(num + 1 != numSub && num - 1 != numSub) {
            return 'NOT JUMPING';
        }
    }
    return 'JUMPING';
}

console.log(crescente(test));
*/


/*
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



console.log(numerosCerto(test2));
*/