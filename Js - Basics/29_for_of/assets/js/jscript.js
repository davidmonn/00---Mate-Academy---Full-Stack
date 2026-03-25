let title = 'Trabalhando com Strings';

// Essa função percorre a string caractere por caractere,
// substituindo todas as ocorrências de um caractere específico
// por outro valor definido
function replaceAll(input, char, replacement) {
    let result = '';
    for(let ch of input) {
        if(ch === char) {
            result += replacement;
        } else {
            result += ch;
        }
    }
    return result;
}

console.log(replaceAll(title, ' ', '-'));