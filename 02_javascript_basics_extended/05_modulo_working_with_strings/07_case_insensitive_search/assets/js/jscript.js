const modelo = 'Apple Iphone 14';
const busca = 'IPH';

const condicao = modelo.toLowerCase().includes(busca.toLowerCase());

if(condicao) {
    console.log('O modelo foi achado!');
}