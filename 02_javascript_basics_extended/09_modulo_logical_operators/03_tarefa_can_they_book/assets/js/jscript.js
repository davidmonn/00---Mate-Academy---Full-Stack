/*
Exemplos de entrada e saída:

canTheyBook(0, 2) === false - 0 adultos, 2 crianças. Violação das regras.
canTheyBook(2, 4) === true - 2 adultos, 4 crianças. A reserva é permitida.
canTheyBook(2) === true - 2 adultos. A reserva é permitida.
canTheyBook(9) === false - 9 adultos. Violação das regras.

max 2 criancas por adulto
se nao for informado criancas = 0



*/

function canTheyBook(adultsCount, childrenCount = 0) {
    const limit = 8;
    const total = adultsCount + childrenCount;

    const limitFull = total > limit;
    const semAdulto = adultsCount === 0;
    const muitaCrianca = childrenCount > (adultsCount * 2);

    if(limitFull || semAdulto || muitaCrianca) {
        return false;
    } else {
        return true;
    }

}

const test = canTheyBook(0, 2);

console.log(test);