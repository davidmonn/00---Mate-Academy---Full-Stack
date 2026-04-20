const contador = 4;

if(contador < 5) {
    console.log('Poucos');
} else if (contador > 10) {
    console.log('Muitos');
} else {
    console.log('Alguns');
}

switch (true) {
    case contador < 5:
        console.log('Poucos');
        break;
    case contador > 10:
        console.log('Muitos');
        break;
    default:
        console.log('Alguns');
}