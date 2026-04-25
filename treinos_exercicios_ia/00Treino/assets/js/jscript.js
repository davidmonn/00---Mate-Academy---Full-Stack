function maiorDez(numbers) {
    let values = [];

    for(let number = 0; number < numbers.length; number++) {
        if(numbers[number] > 10) {
            values.push(numbers[number]);
        }
    }
    return values;

}

const test = [1,2,5,9,11,15,22,23, 4, 2];

const testFunc = maiorDez(test);

console.log(testFunc);