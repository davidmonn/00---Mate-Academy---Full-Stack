/*
Exemplos:

countBoxes('aabca') === {a: 3, b: 1, c: 1}
countBoxes('aaaaca31') === {a: 5, c: 1, 3: 1, 1: 1}
countBoxes('') === {}
*/

const boxs = 'aabca';

function countBoxes(boxes) {
    let separar = boxes.split('');
    let organizarCaixas = {};

    if(boxes === '') {
        organizarCaixas;
    }

    for(let box of separar) {
        if(organizarCaixas[box]) {
            organizarCaixas[box]++;
        } else {
            organizarCaixas[box] = 1;
        }
    }
    return organizarCaixas;
}

const testFunc = countBoxes(boxs);
console.log(testFunc);