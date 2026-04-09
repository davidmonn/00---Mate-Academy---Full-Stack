function obterValor() {
    const valor = Math.random();

    if(valor < 0.2) {
        return 0
    }

    return valor;
}

//Variavel x no escopo global para podermos acessar no while
let x;

//while (true) para podermos fazer um laco infinito e para no break
while(true) {
    //Com variavel no escopo global podemos usar x para receber funcao.
    x = obterValor();
    //Com esse if se por acaso der 0 ira interromper a funcao
    if(x === 0) {
        break;
    }

    //Por fim imprimimos o valor
    console.log(x);
}

console.log('--- FEITO ---');