let age = 18;

function greetIfAdult(age) {
    if(age >= 50) {
        console.log('Senhor');
    } else if(age >= 18) {
        console.log('Adulto');
    } else if(age >= 14) {
        console.log('Adolescente');
    } else if(age < 14) {
        console.log('Jovem/Crianca');
    }
}

greetIfAdult(55);