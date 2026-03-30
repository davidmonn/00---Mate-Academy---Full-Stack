// compareRobots([12, 4, 13], [1, 1, 4, 5, 12]); // 'First robot for sale!' (29 > 23)

let tFirst = [12, 4, 13];
let tSecond = [1, 1, 4, 5, 12];

// function compareRobots(firstRobotResults, secondRobotResults) {
//     let resultFirst  = 0;
//     let resultSec = 0;

//     for(let i = 0; i < firstRobotResults.length; i++) {
//         resultFirst += firstRobotResults[i];
//     }
//     for(let isec = 0; isec < secondRobotResults.length; isec++) {
//         resultSec += secondRobotResults[isec];
//     }
    
//     if(resultFirst > resultSec) {
//         return `First robot for sale! ${resultFirst}`;
//     } if (resultFirst < resultSec){
//         return `Second robot for sale! ${resultSec}`;
//     } if(resultFirst == resultSec) {
//         return `Both robots for sale! ${resultFirst}`;
//     }
// }

function compareRobots(firstRobotResults, secondRobotResults) {
    let resFirst = 0;
    let resSec = 0;

    for(let i of firstRobotResults) {
        resFirst += i;
    }
    for(let i of secondRobotResults) {
        resSec += i;
    }
    
    if(resFirst > resSec) {
        return `First robot for sale! ${resFirst}`;
    } if (resFirst < resSec){
        return `Second robot for sale! ${resSec}`;
    } if(resFirst == resSec) {
        return `Both robots for sale!`;
    }
}

console.log(compareRobots(tFirst,tSecond));