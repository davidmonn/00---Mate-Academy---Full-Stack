const numbers = ['0', '1', '2', '3'];

numbers.join = function(separator) {
  let sep = separator;
  let save = '';

  if (sep === undefined) {
    sep = ',';
  }

  for (let value = 0; value < this.length; value++) {
    let verif = this[value];

    if (verif === undefined || verif === null) {
      verif = '';
    }

    save += verif;

    if (value < this.length - 1) {
      save += sep;
    }
  }

  return save;
};

const teste = numbers.join('');
console.log(teste);
