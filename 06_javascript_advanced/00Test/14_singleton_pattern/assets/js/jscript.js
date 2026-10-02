class Singleton {
  static voltar;

  constructor(name) {
    if (Singleton.voltar) {
      return Singleton.voltar;
    }

    this.name = name;
    Singleton.voltar = this;
  }
}

const firstObject = new Singleton('David');
const secondObject = new Singleton('teste');

console.log(
  `first: ${firstObject.name}`
);

console.log(
  `second: ${secondObject.name}`
);


console.log(
  firstObject === secondObject, // true
  firstObject instanceof Singleton === true,
  secondObject instanceof Singleton === true
);


