/*
Max is the winner!!! - se Maxim tiver resolvido mais tarefas;
Roman is the winner!!! - se Roman tiver resolvido mais tarefas;
Roman and Maxim are the winners!!! - se eles resolveram o mesmo número de tarefas.
getWinner
maxSolved
romanSolved

getWinner(45, '42') === 'Max is the winner!!!'
getWinner('34', 35) === 'Roman is the winner!!!'
getWinner(24, 28) === 'Roman is the winner!!!'
getWinner('13', '11') === 'Max is the winner!!!'
getWinner(15, '15') === 'Roman and Maxim are the winners!!!'

 */

const test = getWinner(15, '15');

function getWinner(maxSolved, romanSolved) {
    const msgMax = 'Max is the winner!!!'
    const msgRoman = 'Roman is the winner!!!';
    const msgEmpate = 'Roman and Maxim are the winners!!!';

    if(+maxSolved > +romanSolved) return msgMax;
    if(+maxSolved < +romanSolved)  return msgRoman;
    if(+maxSolved == +romanSolved) return msgEmpate;

}

console.log(test);