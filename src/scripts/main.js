'use strict';

// eslint-disable-next-line no-shadow
function getMovePosition(coordinate, wallSize, spiderSize) {
  if (coordinate < 0) {
    return 0;
  }

  if (coordinate > wallSize - spiderSize) {
    return wallSize - spiderSize;
  }

  return coordinate;
}

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderSize = spider.clientWidth;
const wallSize = document.querySelector('.wall').clientWidth;

wall.addEventListener('click', e => {
  const xCor = e.offsetX - spiderSize / 2;
  const yCor = e.offsetY - spiderSize / 2;

  spider.style.left = getMovePosition(xCor, wallSize, spiderSize) + 'px';
  spider.style.top = getMovePosition(yCor, wallSize, spiderSize) + 'px';
});
