let n1 = [1,2,3,4,5];
let n2 = [2,4,5,6,7];

function getArraysSum(arr1, arr2) {
    let sum = 0;

    for(let i = 0; i < arr1.length; i++) {
        sum += arr1[i] + arr2[i];
    }

    return sum;
}

console.log(getArraysSum(n1, n2));