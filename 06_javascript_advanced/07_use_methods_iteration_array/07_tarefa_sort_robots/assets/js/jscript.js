const robots = [
 {name: 'Kobs', ver: 16},
 {name: 'Lari', ver: 32},
 {name: 'Lee', ver: 1},
 {name: 'Robert', ver: 1},
 {name: 'Viber', ver: 4},
 {name: 'Colins', ver: 21},
]

function sortRobotsByVersion(robots) {
  robots.sort((robotA, robotB) => {
    const verA = robotA.ver;
    const verB = robotB.ver;

    return verB - verA;
  });
}

const result = sortRobotsByVersion(robots);
console.log(result);
