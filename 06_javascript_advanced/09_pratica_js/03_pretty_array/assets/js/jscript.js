const t = [2, 10, 9, 3];

function isArrayPretty(numbers) {
  if (numbers.length === 0) {
    return false;
  }

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (numbers.includes(number - 1) || numbers.includes(number + 1)) {
      continue;
    }

    return false;
  }

  return true;
}

console.log(
  isArrayPretty(t)
)
