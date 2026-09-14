function makePackage(connectionsLimit) {
  let cont = 0;

  return () => {
    const text = 'connections left';

    if (cont >= connectionsLimit) {
      return 'You reached the connections limit!';
    }
    cont++;

    return `${connectionsLimit - cont} ${text}`;
  };
}

const connect = makePackage(3);

console.log(connect());
console.log(connect());
