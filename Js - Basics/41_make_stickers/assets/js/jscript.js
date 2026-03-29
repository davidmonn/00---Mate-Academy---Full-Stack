//1) Recebe um número inteiro detailsCount e uma string robotPart.
//2) Retorna uma matriz de strings formatadas como {{robotPart}} detail #{{{n}} (por exemplo, Hand detail #1).



// function makeStickers(detailsCount, robotPart) {
//     let result = [];

//     for(let ind = 0; ind < detailsCount; ind++) {
//         result.push(robotPart + ind);
//     }
//     return result;
// }

function makeStickers(detailsCount, robotPart) {
    let result = [];
    
    for(let ind = 1; ind < detailsCount; ind++) {
        result.push(`${robotPart} detail #${ind}`);
    }
    return result;
}

console.log(makeStickers(5, "Hand"));