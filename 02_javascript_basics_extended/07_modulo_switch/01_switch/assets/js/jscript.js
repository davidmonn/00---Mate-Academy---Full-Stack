const contador = 2;

if(contador === 1) {
    console.log('Um');
} else if (contador === 2) {
    console.log('Dois');
} else {
    console.log('Muitos');
}

switch (contador) {
    case 1: 
        console.log('Um');
        break;
    case 2:
        console.log('Dois');
        break;
    
    default: 
        console.log('Muitos');
    //Para o default nao precisamos de break;
    //Quando nosso switch chega no default
    //e assumido que nao tem mais nada para executar.
}
