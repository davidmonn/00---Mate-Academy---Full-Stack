const verificar = [
  { type: 'robot' },
  { type: 'robot' },
  { type: 'dog' },
  { type: 'dog' },
  { type: 'robot' }
];

function processArray(items, callback) {

  for (let i = 0; i < items.length; i++) {
    items[i] = callback(items[i]);
  }
}

function isRobot(robot) {
  if (robot.type === 'robot') {
    return true;
  }

  return false;
}

processArray(verificar, isRobot)
console.log(verificar);

