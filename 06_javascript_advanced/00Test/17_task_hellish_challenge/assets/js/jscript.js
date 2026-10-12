'use strict';

function makeInfinityAdder() {
  let save = 0;

  const adder = function(val) {
    // Aqui estamos dizendo que se val for diferente de undefined
    if (val !== undefined) {
      save += val;

      // quando  retornamos adder estamos retornando a funcao para que possa receber mais parametros
      return adder;
    }

    // nosso result vai receber os valores da soma anterior de save += val antes de zera-lo
    const result = save;
    save = 0;

    // Retornamos o result pois esta com resultado final
    return result;
  };

  return adder;
}

const adder = makeInfinityAdder();

console.log(adder());       // 0
console.log(adder(4)(5)()); // 9
console.log(adder());       // 0
// console.log(adder(5)(5)(5)); // retorna a função adder
// console.log(adder(4));       // retorna a função adder
console.log(adder());        // 19
console.log(adder());        // 0