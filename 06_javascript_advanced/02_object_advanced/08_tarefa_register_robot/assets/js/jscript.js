'use strict';

/**
 * @typedef {Object} Robot
 * @property {number} id
 * @property {string} skill
 * @property {Warehouse} currentWorkPlace
 *
 * @typedef {Object} Warehouse
 * @property {number[]} aiStaff
 * @property {number} boxes
 * @property {string} currentStatus
 *
 * @param {Robot} robot
 * @param {Warehouse} warehouse
 */

const robo = {
  id: 55,
  skill: null,
  currentWorkPlace: null,
};

const save = {
  aiStaff: [],
  boxes: 0,
  currentStatus: 'Active',
};

function registerRobot(robot, warehouse) {
  warehouse.aiStaff.push(robot.id);
  robot.currentWorkPlace = warehouse;
}

registerRobot(robo, save);

