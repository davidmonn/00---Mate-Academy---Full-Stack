const frase = '     Inicio fim      ';

const fraseSemEspacos = frase.trim();
const frasesSemEspacosAEsquerda = frase.trimStart(); //trimLeft
const frasesSemEspacosADireita = frase.trimEnd(); //trimRight

console.log(`---${fraseSemEspacos}---`);
console.log(`---${frasesSemEspacosAEsquerda}---`);
console.log(`---${frasesSemEspacosADireita}---`);