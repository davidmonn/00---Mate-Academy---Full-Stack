let numbers = [2,4,6,8,10];


for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

//Exercicio 02
let names = ['David', 'Suzana', 'Tita'];
let nome = '';

for(let i of names) {
    console.log(`Ola, ${i}`);
}


//Exercicio 03
let valores = [1, 5, 15];

for(let i of valores) {
    if(i > 10) {
        console.log(`Valor maior que 10`);
    } else {
        console.log(`Valor menor ou igual a 10`);
    }
}