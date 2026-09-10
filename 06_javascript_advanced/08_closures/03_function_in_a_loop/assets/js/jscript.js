let team = [];
let firstFreeNumber = 0;

// #region Modo Errado
// let currentNumber = 0;
// while (team.length < 3) {
  //   const player = function() {
    //     console.log(currentNumber);
    //   }
    
    //   currentNumber++;
    
    //   team.push(player);
    // }
// #endregion Modo Errado

// #region While correct
// while (team.length < 3) {
  //   let currentNumber = firstFreeNumber;
  //   const player = function() {
    //     console.log(currentNumber);
    //   }
    
    //   firstFreeNumber++;
    
    //   team.push(player);
    // }
// #endregion While correct

for (let currentNumber = 0; team.length < 3; currentNumber++) {
  const player = function() {
    console.log(currentNumber);
  }

  team.push(player);
}

team[0] ();
team[1] ();
team[2] ();