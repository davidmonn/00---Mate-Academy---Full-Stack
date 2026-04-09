const limite = obterLimite();
const segundosEmUmDia = 60 * 60 * 24;

for(let i = 0; i < limite; i++) {
    const segundos = i * segundosEmUmDia;
    console.log(segundos);
}

function obterLimite() {
    console.log('Obtendo limite...');
    return 10;
}