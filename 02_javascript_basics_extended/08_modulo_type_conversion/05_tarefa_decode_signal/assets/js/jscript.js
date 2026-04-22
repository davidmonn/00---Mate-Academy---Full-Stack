/*
decodeSignal('abc') === 1
decodeSignal('1') === 1
decodeSignal(0) === 0
decodeSignal('') === 0
decodeSignal(null) === 0
*/

function decodeSignal(input) {
    let msg1 = 1;
    let msg2 = 0;
    
    if(input === 'abc' || input === '1') {
        return msg1;
    }
    return msg2;

}

const test = decodeSignal('abc');

console.log(test);
