const nome1 = 'David';
const sobNome1 = 'Monteiro';
let idade1 = 28;

const nome2 = 'Suzana';
const sobNome2 = 'Santos';
let idade2 = 24;

function imprimirUsuario(nome, sobrenome, idade) {
    console.log(`Usuario: ${nome} ${sobrenome} (idade: ${idade})`);
}

imprimirUsuario(nome1, sobNome1, idade1);
imprimirUsuario(nome2, sobNome2, idade2);


const user1 = {
    nome: 'David',
    sobrenome: 'Monteiro',
    idade: 28
};

const user2 = {
    nome: 'Suzana',
    sobrenome: 'Santos',
    idade: 24
};

function imprimirUserObjct(user) {
    console.log(`Usuario: ${user.nome} ${user.sobrenome} (idade: ${user.idade})`);
}

imprimirUserObjct(user1);
imprimirUserObjct(user2);