let text = ['one', 'two', 'three', 'four', 'five', 'six'];

// //Dessa forma podemos verificar se existe um elemento dentro de nosso array
// // Cada item do array é comparado individualmente
// function includes(items, itemToFind) {

//     for(let item of items) {
//         if(item === itemToFind) {
//             return true
//         }
//     }
//     // Se nenhum item for igual, retorna false no final
//     return false;
// }

//IndexOf agora iremos identificar o indice de cada uma das palavras que pesquisarmos
function indOf(items, itemToFind) {
    for(let i = 0; i < items.length; i++) {
        if(items[i] === itemToFind) {
            return i;
        }
    }
    return -1;
}

console.log(indOf(text, 'three'));