const robDavid = {
  name: 'David',
  partner: null,
};

const robSuz = {
  name: 'Suzana',
  partner: null,
};

const robTit = {
  name: 'Tita',
  partner: null,
};

function makeRobotsPair(robot1, robot2) {
  if (robot2 === undefined) {
    robot1.partner = null;

    return;
  }

  robot1.partner = robot2;
  robot2.partner = robot1;
}


makeRobotsPair(robDavid,robSuz);
console.log(robDavid);
console.log(robSuz);

