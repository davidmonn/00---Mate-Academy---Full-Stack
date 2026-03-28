let n1 = [1,2,3,4,5];
let n2 = [1,2,3,4,5];

function combineArrays(first, second) {
    let sum = [];

    for(let ind = 0; ind < first.length; ind++) {
        sum.push(first[ind] + second[ind]);
    }
    return sum;
}

console.log(combineArrays(n1, n2));