/*
forward é o sinal 0 para x e 1 para y
back é o sinal 0 para x e -1 para y
right é o sinal 1 para x e 0 para y
left é o sinal -1 para x e 0 para y
stop é o sinal 0 para x e 0 para y
Se o comando não for reconhecido, x e y serão definidos como 0.

forward = 0,back = 0, right = 1, left = -1, stop = 0


*/

let test = getDirection('forward');

function getDirection(direction) {
    let x = 0;
    let y = 0;

    switch(direction) {
        case 'forward':
            x = 0; y = 1;
            return `hor=${x} ver=${y}`;
        case 'back':
            x = 0; y = -1;
            return `hor=${x} ver=${y}`;
        case 'right':
            x = 1; y = 0;
            return `hor=${x} ver=${y}`;
        case 'left':
            x = -1; y = 0;
            return `hor=${x} ver=${y}`;
        case 'stop':
            x = 0; y = 0;
            return `hor=${x} ver=${y}`;
        default:
            x = 0; y = 0;
            return `hor=${x} ver=${y}`;
    }
}

console.log(test);