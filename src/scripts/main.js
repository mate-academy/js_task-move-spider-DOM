'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spiderMan = document.querySelector('.spider');
  const maxX = wall.clientWidth - spiderMan.width;
  const maxY = wall.clientHeight - spiderMan.height;

  if (e.target !== wall) {
    return;
  }

  let x = e.offsetX - spiderMan.width / 2;
  let y = e.offsetY - spiderMan.height / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  spiderMan.style.top = y + 'px';
  spiderMan.style.left = x + 'px';
});
