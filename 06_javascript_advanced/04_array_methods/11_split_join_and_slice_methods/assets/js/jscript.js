// Metodo split();
const phrase = 'My name is David';
const letra = phrase.split(' ', 2);
console.log(letra);

//Metodo join()
const fullName = ['David', 'Monteiro']
const separar = fullName.join(' ')
console.log(separar);

// Metodo slice()
console.log(
  // Dessa forma temos uma copia do array
  fullName.slice(),
  // Pega todas as palavras a partir do indice passado
  fullName.slice(1),
  // Pega todos os elementos exceto o primeiro e o ultimo
  fullName.slice(1, -1),
);

