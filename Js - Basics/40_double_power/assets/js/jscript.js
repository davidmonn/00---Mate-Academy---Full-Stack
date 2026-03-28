let test = [2, 3, 4, 5];

function doublePower(currentPowers) {
    let val = [];

    for(let i of currentPowers) {
        val.push(i * 2);
    }
    return val;
}

console.log(doublePower(test));