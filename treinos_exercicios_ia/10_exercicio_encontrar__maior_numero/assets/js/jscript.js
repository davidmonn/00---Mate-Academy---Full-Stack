let test = [15,2,3,33,22,25,55,1];

//For
function maiorNumFor(numeros) {
    let compararNum = numeros[0];

    for(let num = 0; num < numeros.length; num++) {
        if(numeros[num] > compararNum) {
            compararNum = numeros[num];
        }
    }
    return compararNum;
}

console.log(maiorNumFor(test));

//For Of
function maiorNumOf(numbers) {
    let hightNumb = numbers[0];

    for(let numb of numbers) {
        if(numb > hightNumb) {
            hightNumb = numb;
        }
    }
    return hightNumb;
}

console.log(maiorNumOf(test));