/*
recommendRoom(2, 2, 1) === 'small room + extra bed'
recommendRoom(2, 1, 1) === 'small room'
recommendRoom(3, 2) === 'big room'
recommendRoom(3, 0, 2) === 'small room + extra bed'
recommendRoom(7, 0, 2) === 'big room + extra bed'
recommendRoom(8) === 'big room'
*/

function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
    const soma = adultsCount + childrenCount + babiesCount;
    const criancas = childrenCount + babiesCount;
    
    if(soma <= 4 && criancas <= (adultsCount * 2)) return 'small room';
    if(adultsCount >= childrenCount && babiesCount === 0) return 'big room';
    if(soma <= 8 && criancas <= (adultsCount * 2)) return 'small room + extra bed';

    if((adultsCount * 2) > babiesCount  && adultsCount + babiesCount === 9) return 'big room + extra bed';

    return 'Verificar novamente';

}

const test = recommendRoom(8);

console.log(test);