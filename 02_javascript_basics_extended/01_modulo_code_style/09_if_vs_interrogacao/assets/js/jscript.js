const idade = 21;

if(idade > 18) {
    console.log(`Adulto`);
} else if (idade > 7) {
    console.log(`Crianca`);
} else {
    console.log(`Bebe`);
}

let mensagem = (idade > 18) 
    ? (`Adulto`) 
    : (idade > 7) 
        ? (`Crianca`) 
        : (`Bebe`);

console.log(mensagem);