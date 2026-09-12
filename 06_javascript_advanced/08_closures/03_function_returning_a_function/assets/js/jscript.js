'use strict';


function createRecorder(name) {
  let words = [];

  const recorder = (...args) => {
    if (args.length === 0) {
      console.log(name, words.join(' '));
    } else {
      words.push(args[0])
    }
  };

  recorder.clear = () => {
    words = [];
  };

  return recorder;
}

const myRecorder = createRecorder('Coach');
const yourRecorder = createRecorder('Student');

myRecorder('live');
myRecorder('long');
myRecorder.clear();

myRecorder('and');
myRecorder('prosper');

yourRecorder('Hi');
yourRecorder('I');
yourRecorder('am');
yourRecorder('a');
yourRecorder('student');

myRecorder();
yourRecorder();