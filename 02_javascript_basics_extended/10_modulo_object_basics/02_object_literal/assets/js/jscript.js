const idade = 28;

const user = {
    'nome': 'David',
    "sobrenome": 'Monteiro',
    nomeCompleto: 'David Monteiro',

    ['eh' + 'cassado']: true,
    idade,
};

console.log(user);