'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', event => {
  if (event.target !== wall) {
    return;
  }

  let x = event.offsetX - spider.offsetWidth / 2;
  let y = event.offsetY - spider.offsetHeight / 2;

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
