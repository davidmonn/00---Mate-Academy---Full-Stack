let x = 1;
let f;

if (true) {
  x = 10;

  f = function() {
    console.log(x);
  }
}

if (true) {
  let x = 100;

  f();
}

x = 1000;
