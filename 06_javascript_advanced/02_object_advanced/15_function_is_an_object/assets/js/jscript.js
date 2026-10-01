'use strict';

const user = () => {
    console.log(123);
};

user.age = 29;
user.firstName = 'David'
user['lastName'] = 'Monteiro';

// Dentro de nosso parametro fizemos Destructuring
function printInfo({ firstName, lastName, age = 0 }) {
    const message = console.log(`${firstName} ${lastName} is ${age}!!!`);
}

printInfo(user);
user();