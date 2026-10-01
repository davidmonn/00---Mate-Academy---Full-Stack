const bob = { type: 'cleaner', name: 'bob' };
const paul = { type: 'cargo', name: 'paul' };
const robert = { type: 'cleaner', name: 'robert' };
const robots = [bob, paul, robert];

function groupByMethod() {
  Array.prototype.groupBy = function(callback = x => x) {
    const result = {};

    for (const value of this) {
      const save = callback(value);

      if (!result[save]) {
        result[save] = [];
      }

      result[save].push(value);
    };

    return result;
  };
}

groupByMethod();
const groupedRobots = robots.groupBy(robot => robot.name)

console.log(groupedRobots);


/*
function groupByMethod() {
  Array.prototype.groupBy = function(callback = x => x) {
    const armz = {};

    for (const value of this) {
      const result = callback(value);

      if (!armz[result]) {
        armz[result] = [];
      }

      armz[result].push(value);
    }

    return armz;
  };
}

groupByMethod();
const groupedWords = words.groupBy(word => word.length);

console.log(groupedWords);
*/
/*

console.log('-----------------------------------------------');

// #region test
function start(callback) {
  callback();
}

start(() => console.log('Olá'));
// #endregion test


console.log('-----------------------------------------------');

// #region test
function executar(callback) {
  return callback();
}
console.log(executar(() => 4 < 5));
// #endregion test


console.log('-----------------------------------------------');

// #region test
function sayHi(cb) {
  return cb();
}

console.log(sayHi(() => 'Hi'));
// #endregion test

 */