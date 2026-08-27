// const getClientStatus = () => 'vip';
// const offerLuxuriousRoom = () => 'Luxury room';
// const offerStandardRoom = () => 'Standard room';

function offerRoom(getClientStatus, offerStandardRoom, offerLuxuriousRoom) {
  const status = getClientStatus();

  if (status === 'vip') {
    return offerLuxuriousRoom();
  } else {
    return offerStandardRoom();
  }
}

function getClientStatus() {
  return 'outro';
}

function offerLuxuriousRoom() {
  return 'Luxury room';
}

function offerStandardRoom() {
  return 'Standard room';
}

const teste = offerRoom(
  getClientStatus,
  offerStandardRoom,
  offerLuxuriousRoom
);

console.log(teste);

// #region task
// Teve q ser feito dessa forma alterando nome dos parametros
// function offerRoom(
//   getClientStatus,
//   offerStandardRoom,
//   offerLuxuriousRoom,
// ) {
//   const status = getClientStatus();

//   if (status === 'vip') {
//     return offerLuxuriousRoom();
//   } else {
//     return offerStandardRoom();
//   }
// }

// function getStatus() {
//   return 'vip';
// }

// function standRoom() {
//   return 'Standard room';
// }

// function luxyRoom() {
//   return 'Luxury room';
// }

// #region task

