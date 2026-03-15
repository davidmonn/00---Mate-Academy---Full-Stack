// //Abreviando o codigo
// function calcArea(a, b) {
//     return a * b;
// }

// let totalArea = calcArea(8,9);
// console.log(totalArea);

//Adicionando valor inicial
function getArea(length = 1, width = 1.5) {
    return length * width;
}

let totalArea = getArea();
console.log(totalArea);