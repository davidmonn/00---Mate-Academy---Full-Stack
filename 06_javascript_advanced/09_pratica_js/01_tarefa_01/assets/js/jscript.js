const x = 46156;

function toArrayOfDigits(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map(Number);
}

const test = toArrayOfDigits(x)

console.log(toArrayOfDigits(x));
