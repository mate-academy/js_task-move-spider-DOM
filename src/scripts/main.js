'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', event => {
  const xCoordinate = event.offsetX - spider.offsetWidth / 2;
  const yCoordinate = event.offsetY - spider.offsetHeight / 2;

  spider.style.left = checkBorders(
    xCoordinate,
    spider.offsetWidth,
    wall.clientWidth
  ) + 'px';

  spider.style.top = checkBorders(
    yCoordinate,
    spider.offsetHeight,
    wall.clientHeight
  ) + 'px';

  function checkBorders(coordinate, spiderSize, wallSize) {
    if (coordinate < 0) {
      return 0;
    }

    if (coordinate > wallSize - spiderSize) {
      return wallSize - spiderSize;
    }

    return coordinate;
  }
});
