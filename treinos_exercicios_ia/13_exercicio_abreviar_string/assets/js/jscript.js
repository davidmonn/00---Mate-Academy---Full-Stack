const test = 'Hello Word';

function firstChars(chars) {
    let words = chars.split(' ');
    let result = '';

    for (let word of words) {
        result += word[0] + word[word.length - 1] + ' ';
    }

    return result.trim();
}

console.log(firstChars(test));