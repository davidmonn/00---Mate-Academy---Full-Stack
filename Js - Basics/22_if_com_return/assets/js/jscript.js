//Dessa maneira nao tera como salvar em uma variavel por falta do return.
// function greet(age) {
//     if(age >= 60) {
//         console.log('Senhor');
//     } else if(age >= 18) {
//         console.log('Adulto');
//     } else if(age >= 12) {
//         console.log('Jovem');
//     } else if(age >= 6)  {
//         console.log('Crianca');
//     } else {
//         console.log('Bebe');
//     }
// }


//Com else if
function greetComElse(age) {
    if(age >= 60) {
        return 'Senhor';
    } else if(age >= 18) {
        return 'Adulto';
    } else if(age >= 12) {
        return 'Jovem';
    } else if(age >= 6)  {
        return 'Crianca';
    } else {
        return 'Bebe';
    }
}

//Sem else if
//Maneira sem else if, pois o return ja encerra a funcao. 
function greetSemElse(age) {
    if (age >= 60) return 'Senhor';
    if (age >= 18) return 'Adulto';
    if (age >= 12) return 'Jovem';
    if (age >= 6) return 'Crianca';
    return 'Bebe';
}

//Variavel greeting ira receber o return dentro da variavel, se nao houver return, resultado sera undefined
let greetingComEls = greetComElse(18);
let greetingSemEls = greetSemElse(12);

console.log(greetingComEls);
console.log(greetingSemEls);