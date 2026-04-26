let robos = [
   {coreVersion: 9},
   {coreVersion: 13},
   {coreVersion: 16},
   {coreVersion: 9},
   {coreVersion: 14},
];


function getOutdated(robots, newVersion) {
    const result = [];

    for(let verif in robots) {
        if(robots[verif].coreVersion < newVersion) {
            result.push(Number(verif))
        }
    }

    return result;

}

const testFunc = getOutdated(robos, 10);

console.log(testFunc);

// console.log(robos[0]);