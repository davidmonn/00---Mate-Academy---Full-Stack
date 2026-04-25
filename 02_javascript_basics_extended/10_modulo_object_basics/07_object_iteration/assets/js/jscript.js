const ponto = {
    x: 1,
    y: 2,
    z: 3,
    2: 'b',
    a: 4,
};

ponto.abc = 123;

for(let chave in ponto) {
    console.log(chave, ponto[chave]);
}

