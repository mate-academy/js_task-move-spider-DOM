'use strict';

const spider = document.querySelector('.spider');
const spiderSize = spider.offsetWidth;

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const topGap = wall.offsetTop + wall.clientTop;
  const leftGap = wall.offsetLeft + wall.clientLeft;

  const positionX = e.clientX - leftGap - spiderSize / 2;
  const positionY = e.clientY - topGap - spiderSize / 2;

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
