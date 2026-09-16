function makeSpyListener() {
  const msg = [];
  const msgClear = 'Transferring data... Deleting data... Clear!';

  function listener(words) {
    if (arguments.length > 0) {
      msg.push(words);
    } else {
      return msg;
    }
  }

  listener.clear = () => {
    msg.length = 0;

    return msgClear;
  };

  return listener;
}



const listener = makeSpyListener();

console.log(listener()); // []

listener(`Mate Robot Factory is weird`);
listener(`It’s a spy robot!!! Catch him!`);

console.log(listener());
// ['Mate Robot Factory is weird', 'It’s a spy robot!!! Catch him!']

console.log(listener.clear());
// 'Transferring data... Deleting data... Clear!'

console.log(listener()); // []