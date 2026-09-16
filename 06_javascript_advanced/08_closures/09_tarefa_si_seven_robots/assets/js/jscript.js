function makeWarehouse(goods = []) {
  const save = [...goods];

  return function warehouse(...weights) {
    save.push(...weights);

    if (weights.length === 0) {
      let total = 0;

      for (const weight of save) {
        total += weight;
      }

      if (save.length === 0) {
        return {
          totalWeight: 0,
          averageWeight: 0,
        };
      }

      return {
        totalWeight: total,
        averageWeight: Math.round(total / save.length),
      };
    };
  };
};

const  firstWarehouse = makeWarehouse([10, 20]);
firstWarehouse(10, 20, 30, 40, 10, 10);
console.log(firstWarehouse()); // { totalWeight: 30, averageWeight: 15 }