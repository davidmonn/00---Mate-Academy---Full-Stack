let age = 25;

if(age >= 18) {
    console.log(`Bom dia`);
} else {
    console.log(`Nao atendeu as condicoes`);
}

function greetIfAdult(age) {
    if(age >= 18) {
        console.log(`Ola`);
    } else {
        console.log(`Nao atendeu aos requisitos`)
    }
}

greetIfAdult(17);