function countOccurrences(phrase, part) {
  let count = 0;

  for (let i = 0; i < phrase.length; i++) {
    if (phrase.startsWith(part, i)) {
      count++;
    }
  }

  return count;
}

console.log(
  countOccurrences('azyxxzyzy', 'zy'),
);
