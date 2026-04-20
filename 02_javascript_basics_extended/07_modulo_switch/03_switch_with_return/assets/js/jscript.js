const corPrimaria = 'Vermelho';

let corSecundaria = obterCorSecundaria(corPrimaria);

function obterCorSecundaria(cor) {
    switch (cor) {
        case 'Vermelho':
            return 'Magenta';
        case 'Verde':
            return 'Amarelo';
        case 'azul':
            return 'Ciano';
        default:
            return 'Branco';
    }
}
console.log(corSecundaria);
