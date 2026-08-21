const date = '05-11-1997';

function formatDate(date) {
  const nDate = date.split('-');
  let configDate = '';

  configDate += `${nDate[2]}.${nDate[1]}.${nDate[0]}`;

  return configDate;
}



const teste = formatDate(date);
console.log(teste);
