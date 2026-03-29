let test = [1, 2, 3, 4, 5];
let teste = [1, 11, 2];

function isSorted(boxNumbers) {
    // let conf = 0;

    for(let i = 0; i < boxNumbers.length; i++) {
        if(boxNumbers[i] > boxNumbers[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isSorted(teste));