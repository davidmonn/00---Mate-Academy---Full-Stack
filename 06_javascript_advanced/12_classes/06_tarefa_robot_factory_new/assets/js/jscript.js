class BaseRobot {
  constructor(name, weight, coords, chipVersion) {
    this.name = name;
    this.weight = weight;
    this.chipVersion = chipVersion;

    if (!coords) {
      coords = {};
    }

    if (coords.x === undefined) {
      coords.x = 0;
    }

    if (coords.y === undefined) {
      coords.y = 0;
    }

    this.coords = coords;
  }

  goForward(step = 1) {
    this.coords.y += step;
  }

  goBack(step = 1) {
    this.coords.y -= step;
  }

  goRight(step = 1) {
    this.coords.x += step;
  }

  goLeft(step = 1) {
    this.coords.x -= step;
  }

  getInfo() {
    return `Robot: ${this.name}, Chip version: ${this.chipVersion}, Weight: ${this.weight}`;
  }
}

class FlyingRobot extends BaseRobot {
  constructor(name, weight, coords, chipVersion) {
    super(name, weight, coords, chipVersion);

    if (this.coords.z === undefined) {
      this.coords.z = 0;
    }
  }

  goUp(step = 1) {
    this.coords.z += step;
  }

  goDown(step = 1) {
    this.coords.z -= step;
  }
}

class DeliveryDrone extends FlyingRobot {
  constructor(name, weight, coords, chipVersion, maxLoadWeight = null, currentLoad = null) {
    super(name, weight, coords, chipVersion);

    this.maxLoadWeight = maxLoadWeight;
    this.currentLoad = currentLoad;
  }

  hookLoad(cargo) {
    if (!this.currentLoad) {
      if (cargo.weight <= this.maxLoadWeight) {
        this.currentLoad = cargo;
      }
    }
  }

  unhookLoad() {
    this.currentLoad = null;
  }
}

const david = new BaseRobot('David', 2, {x: 5, y: 10 }, 1.2);

const test = new FlyingRobot('Test', { x: 2, y: 5 });


david.getInfo()
console.log(
  test.coords
);

