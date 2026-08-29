'use strict';

document.addEventListener('click', () => {
  document.body.textContent = '123';

  const timerId = setInterval(() => {
    document.body.textContent = Date.now();
  }, 1000)

  document.addEventListener('contextmenu', () => {
    clearInterval(timerId);
  })
});