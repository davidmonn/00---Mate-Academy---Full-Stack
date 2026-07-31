/*

Crie uma função generateChart, que pega o objeto de estatísticas de venda de robôs (onde a chave é um tipo de robô e valor é uma quantidade de robôs vendidos) e retorna um objeto com as mesmas chaves, mas os valores são graus para um gráfico de pizza.

retorno
{
  cleaner: 30,
  driver: 120,
  washer: 210,
}

 */
// #region Resultado
const robots = {
    cleaner: 2,
    driver: 8,
    washer: 14,
};

function generateChart(statistics) {
    const clone = Object.assign({}, statistics);
    let sum = 0;
    
    for (const key in statistics) {
    const save = statistics[key];
    
    sum += save;
  }
  
  for (const key in clone) {
    const save = clone[key];

    clone[key] = Math.round((save / sum) * 360);
  }
  
  return clone;
}

const test = generateChart(robots);
console.log(test);

// #endregion Resultado


/*
function generateChart(statis) {
    const clone = Object.assign({},statis);
    let soma = 0;

    for (const keys in clone) {
        const armz = clone[keys];

        soma += armz;
    }

    for (const keys in clone) {
        clone[keys] = Math.round((clone[keys] / soma) * 360)
    }

    // console.log(soma);
    return clone;

}

console.log(generateChart(robots));
*/
