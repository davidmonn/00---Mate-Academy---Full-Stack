const frase = 'Que hora é:';

const resultado = frase.replace(/ /g, '-'); // / /g -> O g ira indicar para o JS que essa expressao regular vai funcionar de modo global

console.log(resultado);