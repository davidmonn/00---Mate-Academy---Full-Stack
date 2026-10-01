const years = [1900, 1899, 2001, 2000, 1455, 14];

function getCenturies(years) {
  return years.map((element) => {
    return Math.ceil(element / 100);
  });
}

const result = getCenturies(years);

console.log(result);
