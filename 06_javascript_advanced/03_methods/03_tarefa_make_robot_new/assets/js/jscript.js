const robotName = 'robotTest';
const wheels = 12;
const version = 1.0;
const x = 14;
const y = 21;

function makeRobot(name, wheels, version) {
  const robot = {
    name,
    version,
    wheels,

    get info() {
      return `name: ${this.name}, chip version: ${this.version}, wheels: ${this.wheels}`;
    },

    coords: {
      x: 0,
      y: 0,
    },

    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    goForward(step = 1) {
      if (step > 0) {
        this.coords.y += step;
      }

      return this;
    },

    goBack(step = 1) {
      if (step > 0) {
        this.coords.y -= step;
      }

      return this;
    },

    goRight(step = 1) {
      if (step > 0) {
        this.coords.x += step;
      }

      return this;
    },

    goLeft(step = 1) {
      if (step > 0) {
        this.coords.x -= step;
      }

      return this;
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;

      return this;
    },

  };

  return robot;
}

const test = makeRobot(robotName, wheels, version);

console.log(test);


console.log(test.location);

test.evacuate();

console.log(test.location);
