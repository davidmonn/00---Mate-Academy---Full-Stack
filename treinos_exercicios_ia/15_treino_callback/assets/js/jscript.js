function verificar(values, cb) {
    for(let i = 0; i <= values.length - 1; i++) {
        if (cb(values[i], i)) {
            return `${values[i]} , i: ${i}`;
        }
    }

    return false;
}

console.log(
  verificar([3, 7, 10, 15], (value, index) => {
    return value > 8;
  })
);
