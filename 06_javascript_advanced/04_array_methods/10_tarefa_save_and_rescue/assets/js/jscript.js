const robot = {
  name: 'Sundar',
};

const workPlaces = [
  {
    name: 'mate academy',
    staff: ['Roma', 'Misha', 'Yura'],
  },
  {
    name: 'Google',
    staff: ['Larry', 'Sergey', 'Sundar'],
  },
];

const searchRobot = (robot, workPlaces) => {
  let place = '';

  for (const key of workPlaces) {
    if (key.staff.includes(robot.name)) {
      place = key.name;
    } else {
      place = undefined;
    }
  }

  return place;
};


const test = searchRobot(robot, workPlaces);
console.log(test);
