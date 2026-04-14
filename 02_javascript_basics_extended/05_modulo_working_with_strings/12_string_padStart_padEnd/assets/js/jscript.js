const numeroCartao = '1111 2222 3333 4444'

const ultimosQuatro = numeroCartao.slice(-4);
const primeirosQuatro = numeroCartao.slice(0, 5);

const tamanho = numeroCartao.length; // retorna o tamanho da string

console.log(ultimosQuatro);
console.log(ultimosQuatro.padStart(tamanho, '**** '));
console.log(primeirosQuatro.padEnd(tamanho, ' ****'));
