/*
Tenho R$ 10

Coxinha R$ 5
Pastel R$ 7
Posso comprar a Coxinha e o Pastel ?
*/

let meuDinheiro = 15;
let coxinha = 5;
let pastel = 7;
let troco = meuDinheiro - coxinha;

if(troco >= pastel) {
    document.write(`Da para comprar ambos.`);
    console.log(`Da para comprar ambos.`);
} else {
    console.log(`Da para comprar ambos.`);
    document.write(`Nao da para comprar ambos.`);
}