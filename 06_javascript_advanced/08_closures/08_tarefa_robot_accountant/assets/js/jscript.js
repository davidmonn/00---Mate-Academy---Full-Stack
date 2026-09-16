function makeRobotAccountant() {
  let cont = 0;
  let sum = 0;
  const msg = 'Bzzz... Error!';

  return (a) => {
    return (b) => {
      cont++;

      if (cont <= 3 || cont === 5) {
        sum = a + b;

        return sum;
      }

      if (cont % 2 === 0) {
        return msg;
      }

      sum = a + b;

      return sum;
    };
  };
}

const robot = makeRobotAccountant();
// robot(5)(6) === 11;
console.log(robot(5)(6));
console.log(robot(5)(6));
console.log(robot(5)(6));
console.log(robot(5)(6));
console.log(robot(5)(6));
console.log(robot(5)(6));
