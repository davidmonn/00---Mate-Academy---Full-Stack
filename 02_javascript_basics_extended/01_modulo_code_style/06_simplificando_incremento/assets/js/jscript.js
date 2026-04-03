let i = 0;

++i;
const esquerda = i;

const direita = i;
i++;

console.log(++i === i++);

console.log(esquerda === direita);