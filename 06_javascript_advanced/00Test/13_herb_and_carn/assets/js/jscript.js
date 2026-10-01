'use strict';

class Animal {
  static ROLE_HERB = 'Herbivoro';
  static ROLE_CARN = 'Carnivore';

  // Sem static, as informações como name, health e hidden pertencem aos animais criados. Com static, a própria classe pode possuir informações compartilhadas por todos os objetos. Neste exercício, Animal.alive guarda todos os animais vivos.
  static alive = [];

  health = 100;

  constructor(name) {
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    return (this.hidden = true);
  }
}

class Carnivore extends Animal {
  bite(animals) {
    if (animals.hidden === false && animals instanceof Herbivore) {
      if (animals.health > 50) {
        animals.health -= 50;
      } else {
        animals.health = 0;

        Animal.alive = Animal.alive.filter((animal) => {
          return animal !== animals;
        });

      }
    }
  }
}


const pato = new Herbivore('Pato',);
const gato = new Carnivore('Gato');

console.log(Animal.alive);

gato.bite(pato);
gato.bite(pato);

console.log(pato);
console.log(Animal.alive);

