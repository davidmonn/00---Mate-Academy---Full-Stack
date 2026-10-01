// #region retorno do callback
function f(callback, x) {
  const result = callback(x);

  console.log(result);
}
// #endregion retorno do callback

// #region callback fixo
function fixo(callback, x) {
  const result = callback(2);

  console.log(result);
}
// #endregion callback fixo

// #region funções de callback

// Arrow function
const format = a => `value is ${a}`;

// Função tradicional
function b(valor) {
  return `value is ${valor}`;
}

// #endregion funções de callback

// #region exemplos com retorno do callback

// O valor 5 é passado para o callback através de callback(x).
// "a" recebe 5 e é utilizado dentro da função.
// Resultado: "value is 5"
f(format, 5);

// O valor 5 é passado para o callback através de callback(x).
// "valor" recebe 5 e é utilizado dentro da função.
// Resultado: "value is 5"
f(b, 5);

console.log('-------------------------');

// #endregion exemplos com retorno do callback

// #region exemplos com operadores

function c(valor) {
  return 2 * valor;
}

f(c, 10)

// "a" recebe o valor 10 através de callback(x).
// O outro 2 é o valor pelo qual iremos multiplicar "a".
// Resultado: 10 * 2 = 20
f(a => a * 2, 10);


// "b" recebe o valor 10 através de callback(x).
// O outro 2 é o valor pelo qual iremos dividir "b".
// Resultado: 10 / 2 = 5
f(b => b / 2, 10);

console.log('-------------------------');

// #endregion exemplos com operadores

// #region exemplos callback com valor fixo

// Aqui o valor de "x" não é utilizado.
// A função fixo passa diretamente o valor 2 para o callback através de callback(2).
// "a" recebe 2 e o outro 2 é o valor pelo qual iremos multiplicá-lo.
// Resultado: 2 * 2 = 4
// O 10 é ignorado.
fixo(a => a * 2, 10);


function cFixo(a) {
  return a * 2;
}

fixo(cFixo, 10);

// Aqui temos a mesma lógica.
// "b" recebe 2 através de callback(2).
// O outro 2 é o valor pelo qual iremos dividir "b".
// Resultado: 2 / 2 = 1
// O 10 é ignorado.
fixo(b => b / 2, 10);

// #endregion exemplos callback com valor fixo