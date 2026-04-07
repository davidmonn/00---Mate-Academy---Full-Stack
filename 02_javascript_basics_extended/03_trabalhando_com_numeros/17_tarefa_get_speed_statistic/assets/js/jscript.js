// getSpeedStatistic([8, 9, 3, 12]); // [3, 12, 8]

let test = [8, 9, 3, 12];

function getSpeedStatistic(testResults) {

    if (!Array.isArray(testResults) || testResults.length === 0) {
        return [0, 0, 0];
    }

    let min = testResults[0];
    let max = testResults[0];
    let soma = 0;

    for (let i of testResults) {
        if (i < min) min = i;
        if (i > max) max = i;
        soma += i;
    }

    let media = Math.floor(soma / testResults.length);
        return [min, max, media];
    }

console.log(getSpeedStatistic(test));

