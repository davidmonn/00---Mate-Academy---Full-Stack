const palavra = 'abcdebc';
const part = 'bc';

console.log(
    palavra.includes(part), 
    palavra.indexOf(part), 
    palavra.lastIndexOf(part),
    palavra.startsWith(part),
    palavra.endsWith(part)
);