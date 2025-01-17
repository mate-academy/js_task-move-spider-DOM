'use strict';

document.addEventListener('click', (e) => {
  const spiderMan = document.querySelector('.spider');

  spiderMan.style.left = `${e.clientX}px`;
  spiderMan.style.top = `${e.clientY}px`;
});
