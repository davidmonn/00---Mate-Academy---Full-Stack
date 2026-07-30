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


// #region teste user
/*
const users = {
    David: 'name',
    Monteiro: 'sobrenome',
    29: 'idade'
};
function invertUsers(user) {
    const clone = Object.assign({}, user);
    const verific = [];
    const newObj = {};

    for(const chave in clone) {
        const salvar = String(clone[chave]);
        // console.log(salvar);
        

        if(verific.includes(salvar)) {
            return null;
        }

        verific.push(salvar);
        newObj[salvar] = chave;
    }
    return newObj;
}

const testar = invertUsers(users);
console.log(testar);
*/

// #endregion


const user = {
    David: 'name',
    Monteiro: 'sobrenome',
    29: 'idade',
    'estudar, tocar violao, jogar': 'hobby'
};

function invertUsers(users) {
    const copiar = Object.assign({}, users);
    const verif = [];
    const userInvertido = {};

    for (const chave in copiar) {
        const armazenado = String(copiar[chave]);

        if(verif.includes(armazenado)) {
            return null;
        }

        verif.push(armazenado);
        userInvertido[armazenado] = chave;
    }

    return userInvertido;
}

const testar = invertUsers(user);
console.log(testar);



// #region Teste
/*
const desktop = {
    'rx9060xt': 'placa-video',
    '7800x3d': 'processador',
    ddr5: 'modelRam'
};

function invertInfo(invert) {
    const copia = Object.assign({}, invert);
    const comparar = [];
    const newPc = {};

    for(const chave in copia) {
        const valores = String(copia[chave]);

        if(comparar.includes(valores)) {
            return null;
        }

        comparar.push(valores);
        newPc[valores] = chave;
    }

    return newPc;
}

const newT = invertInfo(desktop);
console.log(newT);
*/
// #endregion
