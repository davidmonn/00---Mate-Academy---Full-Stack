const robot = {
  name: '',
  cpuVersion: 145.4,
  softwareVersion: 23.45,
  coords: {
    x: 0,
    y: 0,
  },
  target: {
    coords: {
      x: 0,
      y: 0,
    },
  },
};


const mainCore = {
  getMainInfo() {
    return `Robot ${this.name}, cpu version ${this.cpuVersion}`;
  },

  getAdditionalInfo() {
    return `Update version: ${this.softwareVersion}`;
  },

  updateRobot(updateVersion) {
    this.softwareVersion = updateVersion;

    return `${this.name} update to ${updateVersion}`;
  },
};

const navigationCore = {
  getCoords() {
    return `x=${this.coords.x} y=${this.coords.y}`;
  },

  setTargetCoords(x, y) {
    this.target.coords.x = x;
    this.target.coords.y = y;
  },
};

const movementCore = {
  moveForward(step = 1) {
    this.coords.x += step;
  },

  moveBack(step = 1) {
    this.coords.x -= step;
  },

  moveLeft(step = 1) {
    this.coords.y += step;
  },

  moveRight(step = 1) {
    this.coords.y -= step;
  },
};

const kerbin = {
  name: 'Kerbin',
};

Object.setPrototypeOf(kerbin, robot);
Object.setPrototypeOf(robot, mainCore);
Object.setPrototypeOf(mainCore, navigationCore);
Object.setPrototypeOf(navigationCore, movementCore);

console.log(
  kerbin.coords
);
