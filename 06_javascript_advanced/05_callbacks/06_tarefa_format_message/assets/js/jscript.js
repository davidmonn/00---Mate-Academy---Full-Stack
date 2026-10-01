const palavras = 'Teste de words';

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

const shorten = word => word.slice(0, 2);

function formatMessage(message, callback) {
  const save = message.split(' ');
  const armz = [];

  for (let i = 0; i < save.length; i++) {
    armz[armz.length] = callback(save[i]);
  }

  return armz.join(' ');
}

const test = formatMessage(palavras, shorten);
console.log(test);
