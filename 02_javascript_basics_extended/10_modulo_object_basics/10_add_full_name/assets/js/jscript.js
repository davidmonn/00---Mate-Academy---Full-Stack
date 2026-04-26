/*
Será conveniente ter o campo fullName no objeto. 
Crie uma função addFullName que pega um user e adiciona uma propriedade fullName com o firstName 
e lastName separados por um único espaço.
*/

const user = {
    firstName: 'David',
    lastName: 'Monteiro',
};

function addFullName(user) {
    user.fullName = `${user.firstName} ${user.lastName}`;
}

const test = addFullName(user);
console.log(test);