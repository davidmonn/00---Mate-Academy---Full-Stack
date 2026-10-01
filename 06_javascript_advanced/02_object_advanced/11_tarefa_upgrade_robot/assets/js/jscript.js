'use strict';

/**
 * @param {Object} robot
 * @param {Object[]} parts
 */

const kobi = {
  chipVer: 9,
  serialNo: 413,
  wheels: 2,
};

const partes = [
  { wheels: 6 },
  { chipVer: 16 },
  { displays: 2 },
];

function upgradeRobot(robot, parts) {
    const robotModif = Object.assign(robot, ...parts);

    return robotModif;
}

const test = upgradeRobot(kobi, partes);

console.log(test);

