// const order = '1 coca cola, 5 chicken nuggets, 20 egg';
const order = '10 ovos, 2 coca cola';

function makeOrderList(order) {
  const itens = order.split(',');
  const list = {};

  if (order === '') {
    return list;
  }

  for (let item = 0; item < itens.length; item++) {
    const currentItem = itens[item].trim();
    const position = currentItem.indexOf(' ');
    const quant = Number(currentItem.slice(0, position));
    const product = currentItem.slice(position + 1).split(' ').join('_');

    list[product] = quant;
  }

  return list;
}


const list = makeOrderList(order);
console.log(list);
