const user = {
    nome: 'David',
    'sobre nome': 'Monteiro',
    idade: 28,
};

console.log(
    user.nome,
    user['sobre nome'],
);

user.idade = 24;
user['nome'] = 'Suzana';
user['sobre nome'] = 'Santos';
user.profissao = 'Programacao';
user['trabalha'] = false;

delete user['sobre nome'];
delete user.trabalha;


console.table(user);