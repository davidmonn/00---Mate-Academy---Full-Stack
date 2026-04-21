const test = findCalculationType(5,2,7);

function findCalculationType(a, b, res) {
    switch (res) {
        case a + b:
            return 'addition';
        case a - b:
            return 'subtraction';
        case a * b:
            return 'multiplication';
        case a / b:
            return 'division';
    }
}

console.log(test);