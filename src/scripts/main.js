'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', event => {
  let xCoordinate = event.offsetX - spider.offsetWidth / 2;
  let yCoordinate = event.offsetY - spider.offsetHeight / 2;

  xCoordinate = checkBorders(
    xCoordinate,
    spider.offsetWidth,
    wall.clientWidth
  );

  yCoordinate = checkBorders(
    yCoordinate,
    spider.offsetHeight,
    wall.clientHeight
  );

  spider.style.left = xCoordinate + 'px';
  spider.style.top = yCoordinate + 'px';

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
