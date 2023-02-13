'use strict';

document.addEventListener('click', e => {
  const spiderMan = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target.className !== 'wall') {
    return;
  }

  let coordX = parseFloat(e.offsetX - spiderMan.clientHeight / 2);

  let coordY = parseFloat(e.offsetY - spiderMan.clientWidth / 2);

  const coordMax = parseFloat(wall.clientWidth - spiderMan.clientWidth);

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordX > coordMax) {
    coordX = coordMax;
  }

  if (coordY > coordMax) {
    coordY = coordMax;
  }

  spiderMan.style.left = `${coordX}px`;

  spiderMan.style.top = `${coordY}px`;

});
