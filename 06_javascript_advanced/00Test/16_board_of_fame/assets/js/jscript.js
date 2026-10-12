class BoardOfFame {
  robots = [];

  constructor(numberOfPlaces = 3) {
    this.numberOfPlaces = numberOfPlaces;
  }

  addRecord(robot) {
    const verifRobot = this.robots.find((nameRobot) => {
      return nameRobot.name === robot.name;
    });

    if (verifRobot) {
      verifRobot.score = robot.score;
    } else {
      this.robots.push(robot)
    }

    this.robots.sort((robotA, robotB) => robotB.score - robotA.score);
  }

  get list() {
    let armzRobots = [];

    for(let i = 0; i <= this.numberOfPlaces - 1; i++) {
      if (this.robots[i]) {
        armzRobots[i] = `${i + 1}. ${this.robots[i].name}: ${this.robots[i].score}`;

      } else {
        armzRobots.push(`${i + 1}. ...`);
      }
    }

    return armzRobots.join(' | ');
  }
}

const board = new BoardOfFame();

board.addRecord({ name: 'Cleaner-900', score: 6 });
board.addRecord({ name: 'Cleaner-775', score: 16 });

console.log(board.list);