function makeRandomizer(numbers) {
  const verif = [];
  const [start, end] = numbers;

  for (let i = start; i <= end; i++) {
    verif.push(i)
  }

  return () => {
    if (verif.length === 0) {
      return null;
    }

    const random = Math.floor(Math.random() * verif.length);
    const [result] = verif.splice(random, 1);

    return result;
  }
}

const getRandom = makeRandomizer([1, 4]);
console.log(getRandom());
console.log(getRandom());
console.log(getRandom());
console.log(getRandom());
console.log(getRandom());
