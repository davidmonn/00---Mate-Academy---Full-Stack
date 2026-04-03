let countries = ['Japao', 'EUA', 'Inglaterra', 'Coreia'];

//Adiciona novo elemento em nosso array, forma menos usada
countries[countries.length] = 'Canada';
//Adiciona novo elemento em nosso array, forma mais usada e pode ser adicionado mais de um elemento.
countries.push('Brasil', 'China');

//Ira nos mostarar quantos elementos nosso array possui.
console.log(countries.length);

//Ira nos mostrar todos os elementos do array
console.log(countries);

//Seleciona elemento especifico do array
console.log(countries[5]);