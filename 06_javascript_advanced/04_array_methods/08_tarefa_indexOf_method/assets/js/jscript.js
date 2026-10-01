const numbers = [undefined, 143, 7, 43, 11, 50, 7];

numbers.indexOf = function(words, firstN = 0) {
  let start = firstN;

  if (start < 0) {
    start = this.length + firstN;

    if (start < 0) {
      start = 0;
    }
  }

  for (let key = start; key < this.length; key++) {
    if (this[key] === words) {
      return key;
    }
  }

  return -1;
};



const test = numbers.indexOf(undefined, - 2);

console.log(test);

/*
numbers.indexOf = function(words, firstN = 0) {

  Aqui criamos uma variavel para nao mudar o parametro diretamente.
  let start = firstN;

  Aqui estamos dizendo que se o valor do argumento recebido for menor que 0
  if (start < 0) {
    Com isso se o valor for menor que 0 o start recebe this.length(tamanho dos valores do array) + argumento passado
    start = this.length + firstN;

    se o start for menor que 0, obrigamos a voltar para o indice 0
    if (start < 0) {
      start = 0;
    }
  }

  aqui estamos acessando os valores de nosso array iniciando do primeiro recebido (start) e enquanto for menor que o array inteiro ele vai iterando ate chegar ao tamanho do array
  for (let key = start; key < this.length; key++) {
  this[key] acessamos o valor do array para verificar se é igual ao argumento recebido (words)
    if (this[key] === words) {
    retorna a key(indice)
      return key;
    }
  }

  return -1;
};
*/

// #region GPT Explciacao:

/*

// Se o índice inicial for negativo, ajustamos contando a partir do final.
if (start < 0) {
  start = this.length + firstN;

  // Se ultrapassar o início do array, começa no índice 0.
  if (start < 0) {
    start = 0;
  }
}

// Percorre o array começando pelo índice definido em start.
for (let key = start; key < this.length; key++) {

  // Compara o valor do índice com o valor procurado.
  if (this[key] === words) {

    // Se encontrar, retorna o índice.
    return key;
  }
}

*/

// #endregion
