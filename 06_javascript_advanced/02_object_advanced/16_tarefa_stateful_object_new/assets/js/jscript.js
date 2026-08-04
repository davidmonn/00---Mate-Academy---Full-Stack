const stat = {
  name: 'John',
  age: 30,
};

const act = [
  {
    type: 'addProperties',
    extraData: {
      city: 'New York',
    },
  },
];

function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToReomove } = action;

    if (type === 'addProperties') {
      Object.assign(state, extraData);
    }

    if (type === 'removeProperties') {
      for (const key of keysToRemove) {
        delete state[key];
      }
    }

    if (type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

transformState(stat, act);

console.log(stat);

