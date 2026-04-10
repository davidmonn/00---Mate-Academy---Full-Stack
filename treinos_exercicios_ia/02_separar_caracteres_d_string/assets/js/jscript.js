// debugger;



let test1 = 'David';

function separarString(str) {
    let result = [];
    
    for(let i = 0; i < str.length; i++) {
        result.push(str[i]);
    }
    return result;
}

console.log(separarString(test1));