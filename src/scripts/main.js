'use strict';

const spider = document.querySelector('.spider');
const spiderSize = spider.offsetWidth;

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  if (!wall || e.target !== wall) {
    return;
  }

  const positionX = e.offsetX - spiderSize / 2;
  const positionY = e.offsetY - spiderSize / 2;

  spider.style.top = `${getCoordinate(positionY, wall.clientHeight)}px`;
  spider.style.left = `${getCoordinate(positionX, wall.clientWidth)}px`;

  function getCoordinate(coordinate, wallSize) {
    if (coordinate < 0) {
      return 0;
    }

    if (coordinate > wallSize - spiderSize) {
      return wallSize - spiderSize;
    }

    return coordinate;
  }
});
