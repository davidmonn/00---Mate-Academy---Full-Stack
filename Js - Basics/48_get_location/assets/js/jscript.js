// getLocation([0, 0], ['forward', 'right']); // [1, 1]
// getLocation([2, 3], ['back', 'back', 'back', 'right']); // [3, 0]
// getLocation([0, 5], ['back', 'back', 'back', 'right', 'left', 'forward']); // [0, 3]

let test = ['forward', 'right'];

function getLocation(coordinates, commands) {
    let x = coordinates[0];
    let y = coordinates[1];

    for (let i of commands) {
        if (i === 'forward') {
            y += 1;
        } else if (i === 'back') {
            y -= 1;
        } else if (i === 'right') {
            x += 1;
        } else if (i === 'left') {
            x -= 1;
        }
    }

    return [x, y];
}

console.log(getLocation(test));