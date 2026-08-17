// #region Task
const kolli = {
  Kolli: 'name',
  123: 'chipVer',
  3: 'wheels',
};

function inverseRobot(robot) {
  const clone = Object.assign({}, robot);
  const compar = [];
  const newRobot = {};

  for (const key in clone) {
    const save = String(clone[key]);

    if (compar.includes(save)) {
      return null;
    }

    compar.push(save);
    newRobot[save] = key;
  }

  return newRobot;
}

const test = inverseRobot(kolli);

console.log(test);

// #endregion


const users = {
    David: 'nome',
    Monteiro: 'sobrenome',
    29: 'idade',
};


// #region Testes
function invertUser(user) {
    const userCopy = Object.assign({}, user);
    const armazenar = [];
    const newUser = {};

    for (const key in userCopy) {
        const verificar = String(userCopy[key]);

        if(armazenar.includes('verificar')){
            return null;
        }

        armazenar.push(verificar);
        newUser[verificar] = key;
    }

    return newUser;
}

const t = invertUser(users);
console.log(t);



// #endregion Testes