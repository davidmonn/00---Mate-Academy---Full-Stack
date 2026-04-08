

function getGuestsCount(guestsInput) {
    let value = parseInt(guestsInput);

    if(isNaN(value)) {
        return 'not a number';
    }
    return value;
    
}

console.log(getGuestsCount('2'));