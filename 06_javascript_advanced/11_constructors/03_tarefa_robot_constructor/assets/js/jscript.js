function Robot(name) {
  this.name = name;

  this.coords = {
    x: 0,
    y: 0,
  };
}

Robot.prototype.goForward = function() {
  this.coords.y += 1;
};

Robot.prototype.goBack = function() {
  this.coords.y -= 1;
};

Robot.prototype.goLeft = function() {
  this.coords.x -= 1;
};

Robot.prototype.goRight = function() {
  this.coords.x += 1;
};

const robert = new Robot('robert');
const user = new Robot('David');

robert.goForward(); // y = 1
robert.goForward(); // y = 1
robert.goForward(); // y = 1
robert.goRight();   // x = 1

console.log(robert);
console.log(user);
