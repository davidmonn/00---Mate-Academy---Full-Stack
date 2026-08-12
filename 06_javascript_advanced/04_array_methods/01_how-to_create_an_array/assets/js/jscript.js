const words = ['one', 'two', 'three', 'four'];
const numbers = [1, 3, 1, 5, 2, 1, 4];

const dados = ['David', 29, true]; //tuple

const userName = 'David';

console.log(words, numbers);
console.log(dados);

console.log(
    userName.split('',),
    [...userName],
    Array.from(userName),
);

for (let i = 0; i <= words.length; i++) {
    console.log(words[i]);
}

for (const n of numbers) {
    console.log(n);
}