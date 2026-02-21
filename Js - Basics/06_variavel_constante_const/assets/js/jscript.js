/*
Tenho R$ 10

Coxinha R$ 5
Pastel R$ 7
Posso comprar a Coxinha e o Pastel ?
*/

let meuDinheiro = 11;
// meuDinheiro = 11;

const coxinha = 5;
const pastel = 7;
meuDinheiro = meuDinheiro - coxinha;

if(meuDinheiro >= pastel) {
    document.write(`Da para comprar ambos.`);
    console.log(`Da para comprar ambos.`);
} else {
    console.log(`Da para comprar ambos.`);
    document.write(`Nao da para comprar ambos.`);
}