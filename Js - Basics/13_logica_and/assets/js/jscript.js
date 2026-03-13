const idade = 18;
const dinheiro = 1500;
const maiorDeIdade = idade >= 18;
const dinheiroSuficiente = dinheiro >= 1500;
const permissaoParaCarteira = maiorDeIdade && dinheiroSuficiente;

console.log(`${maiorDeIdade}`);

console.log(`${dinheiroSuficiente}`);

console.log(`${permissaoParaCarteira}`);


// if(idade >= 18 && dinheiro >= 1500) {
//     console.log(`Pode comecar a realizar as aulas`);
// } else {
//     console.log(`Não atendeu aos requisitos.`); 
// }