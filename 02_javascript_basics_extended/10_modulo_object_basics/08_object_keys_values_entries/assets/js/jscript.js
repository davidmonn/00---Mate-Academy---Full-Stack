const ponto = {
    x: 1,
    y: 2,
    z: 3,
};

// for (let chave in ponto) {
//     console.log(chave, ponto[chave]);
// }

const chaves = Object.keys(ponto);
console.log(chaves);

const valores = Object.values(ponto);
console.log(valores);

const dados = Object.entries(ponto);
console.log(dados);