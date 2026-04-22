console.log(
    2 === 2.0, // True
    2 == 2.0   // True
);

console.log(
    2 === '2.0', // False
    2 == '2.0'   // True
);

console.log(
    NaN === NaN, // False - NaN nao e igual a ele mesmo
    NaN == NaN,  // False - NaN nao e igual a ele mesmo
    Object.is(NaN, NaN), // True - Comparacao Segura - Para casos particulares
);