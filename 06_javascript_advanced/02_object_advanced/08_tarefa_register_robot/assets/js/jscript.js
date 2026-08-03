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

const result = registerRobot(robo, save);
console.log(robo);
console.log(save);
