'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  let x = e.offsetX - spider.offsetWidth / 2;
  let y = e.offsetY - spider.offsetHeight / 2;

  x = checkBorders(x, spider.offsetWidth, wall.clientWidth);
  y = checkBorders(y, spider.offsetHeight, wall.clientHeight);

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;

  function checkBorders(coord, spiderSize, wallSize) {
    if (coord < 0) {
      return 0;
    }

    if (coord > wallSize - spiderSize) {
      return wallSize - spiderSize;
    }

    return coord;
  }
});
