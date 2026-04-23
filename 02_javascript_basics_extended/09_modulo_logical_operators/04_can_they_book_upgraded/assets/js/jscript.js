/*
canTheyBook(0, 1, 1); // false - 0 adultos, 1 criança, 1 bebê. Violação das regras do hotel.
canTheyBook(2, 3, 1); // true - 2 adultos, 3 crianças, 1 bebê. A reserva é permitida.
canTheyBook(2); // true - 2 adultos. A reserva é permitida.
canTheyBook(9); // false - 9 adultos. Número de pessoas por quarto excedido.
canTheyBook(8, 1); // false - 8 adultos, 1 criança. Número de pessoas por quarto excedido.
canTheyBook(8, 0, 1); // true - 8 adultos, 0 crianças, 1 bebê. A reserva é permitida.
canTheyBook(4, 2, 3); // true - 4 adultos, 2 crianças, 3 bebês. A reserva é permitida.
*/

function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
    const total = adultsCount + childrenCount + babiesCount;

    if(adultsCount === 0 || adultsCount >= 9) return false;
    if(babiesCount > adultsCount) return false;
    if(adultsCount + childrenCount >= 9) return false;
    if(childrenCount > (adultsCount * 2)) return false;
    if(adultsCount + childrenCount > 9) return false;
    if(childrenCount + babiesCount > (adultsCount * 2)) return false;
    if(total > 9) return false;
    return true;
    
}

const test = canTheyBook(4,2,3);

console.log(test);