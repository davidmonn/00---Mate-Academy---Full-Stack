//String de exemplo
let title = 'Trabalhando com Strings';

// Guarda o resultado final da string formatada (com '-' no lugar dos espaços)
let result = '';


for(let i = 0; i < title.length; i++) {
    if(title[i] === ' ') {
        result += '-';
    } else {
        result += title[i];
    }
}

console.log(result);