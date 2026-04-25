const dados = {
    '3': 100,
    "3": 200,
    3: 300,
    [1 + 2]: 400,
};

console.log(
    dados['3'],
    dados["3"],
    dados[3],
    dados[1 + 2],
    dados[`3`]
);
