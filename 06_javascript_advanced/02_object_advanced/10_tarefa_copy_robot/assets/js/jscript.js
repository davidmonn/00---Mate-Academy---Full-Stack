/**
 * @typedef {Object} Robot
 * @property {number} serial
 * @property {string} name
 * @property {number} wheels
 *
 * @param {Robot} robot
 *
 * @returns {Robot}
 */

/*
charlie === marlie // false
charlie.serial === 100 // true
marlie.serial === 101 // true
*/

const charlie = {
  serial: 100,
  chipVer: 12,
  wheels: 6,
};

function createRobotCopy(robot) {
  const copyRobot = Object.assign({}, robot);

  copyRobot.serial++;

  return copyRobot;
}

const newRobot = createRobotCopy(charlie);
console.log(newRobot);
