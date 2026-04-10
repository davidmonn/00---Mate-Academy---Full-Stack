/*
isWerewolf('rotator'); // true ('rotator' -> 'rotator')
isWerewolf('home'); // false ('home' -> 'emoh')
isWerewolf('Racecar'); // true (case is ignored)
isWerewolf('eva, can i see bees in a cave'); // true (spaces and punctuation are ignored)
*/

function isWerewolf(target) {
    let min = target.toLowerCase();
    let invert = '';
    min = min.replace(/[^a-z]/g,'');

    for(let i = min.length -1; i >= 0; i--) {
        invert += min[i];
    }

    if(min == invert) {
        return true
    }

    return false;

}

console.log(isWerewolf('rotator'));