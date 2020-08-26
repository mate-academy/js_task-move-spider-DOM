'use strict';

document.addEventListener('click', event => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const coordX = event.offsetX - spider.offsetWidth / 2;
  const coordY = event.offsetY - spider.offsetHeight / 2;

  if (event.target !== wall) {
    return;
  }

  function getCoords(coord, wallSize, spiderSize) {
    if (coord < 0) {
      return 0;
    } else if (coord > wallSize - spiderSize) {
      return wallSize - spiderSize;
    } else {
      return coord;
    }
  }

  spider.style.left = `${getCoords(
    coordX,
    wall.clientWidth,
    spider.clientWidth
  )}px`;

  spider.style.top = `${getCoords(
    coordY,
    wall.clientHeight,
    spider.clientHeight
  )}px`;
});
