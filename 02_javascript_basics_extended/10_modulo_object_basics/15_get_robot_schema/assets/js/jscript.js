/*
Crie uma função getRobotSchema que receba um objeto robot e retorne seu esquema
um objeto com as mesmas chaves, mas tipos de dados como valores.

const robot = {
  version: 16,
  name: 'Cleaner 3000',
  released: true,
  author: { name: 'Vlad' },
};

getRobotSchema(robot) === {
  version: 'number',
  name: 'string',
  released: 'boolean',
  author: 'object',
}
*/

const robot = {
  version: 16,
  name: 'Cleaner 3000',
  released: true,
  author: { name: 'Vlad' },
};


function getRobotSchema(robot) {
    let newRobot = {};

    for(let verif in robot) {
        newRobot[verif] = typeof(robot[verif]);
    }

    return newRobot;
}


const test = getRobotSchema(robot);
console.log(test);