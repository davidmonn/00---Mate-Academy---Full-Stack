let condicao = true;

//False Values
condicao = 0;
condicao = NaN;
condicao = 0n;
condicao = '';
condicao = null;
condicao = undefined;

//True Values
condicao = {};
condicao = [];
condicao = function () {};

console.log(
    Boolean(condicao),
    !!condicao,
)

if(condicao) {
    console.log('Ola');
    console.log('Mundo');
}

