const user = {
    nome: 'David',
    sobrenome: 'Monteiro',
    idade: undefined,
};

console.log(
    // user.idade !== undefined,
    'idade' in user, //Com isso embora o valor seja undefined, ainda teremos true para nossa propriedade mostrando que existe
    user.hasOwnProperty('idade')
);