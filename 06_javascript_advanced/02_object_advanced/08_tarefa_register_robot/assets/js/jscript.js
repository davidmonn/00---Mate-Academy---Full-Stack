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

const robot = {
    id: 0,
    skill: null,
    currentWorkPlace: null,
};

const warehouse = {
    aiStaff: [],
    boxes: 0,
    currentStatus: null,
};

function registerRobot(robot, warehouse) {
    if(robot.id)

    warehouse.aiStaff = robot.id;
    warehouse.currentWorkPlace = robot.currentStatus;
}