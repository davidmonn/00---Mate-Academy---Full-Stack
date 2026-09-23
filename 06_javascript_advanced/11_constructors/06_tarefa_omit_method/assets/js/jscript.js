const robot = {
  wheels: 4,
  name: 'roberto',
  serialNumber: 123,
  coords: {
    x: 0,
    y: 0,
  },
  weight: 40,
}

function omitMethod() {
  Object.prototype.omit = function omit(keys) {
    const newInfs = {};

    for (const value in this) {
      if (Object.hasOwn(this, value) && !keys.includes(value)) {
        newInfs[value] = this[value];
      }
    }

    return newInfs;
  };
}

omitMethod();

console.log(robot.omit(['coords', 'wheels', 'weight']));
















