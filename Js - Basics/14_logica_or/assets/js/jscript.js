const meuDinheiroNoBolso = 50;
const meuLimiteNoCartao = 100;

const valorMercado = 80;

const tenhoDinheiroSuficiente = meuDinheiroNoBolso >=  valorMercado;
const tenhoLimiteSuficiente = meuLimiteNoCartao >= valorMercado;

const possoPagar = tenhoDinheiroSuficiente || tenhoLimiteSuficiente;

console.log(`${possoPagar}`); 