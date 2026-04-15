/*
// 'NASA'
makeAbbr('national aeronautics space administration');

// 'CPU'
makeAbbr('central processing unit');

// 'SMILES'
makeAbbr('simplified molecular input line entry specification');
*/

const test = 'national aeronautics space administration';

function makeAbbr(words) {
    let abreviar = words[0];
    
    for(let char = 0; char < words.length; char++) {
        let sav = words[char];
        
        if(sav === ' ') {
            abreviar += words[char +1];
        }
    }
    return abreviar.toUpperCase();
}

console.log(makeAbbr(test));