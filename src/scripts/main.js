'use strict';

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  const spider = document.querySelector('.spider');
  const wallSize = document.querySelector('.wall').clientWidth;
  const spiderSize = spider.clientWidth;

  const coordinateX = e.offsetX - spiderSize / 2;
  const coordinateY = e.offsetY - spiderSize / 2;

  spider.style.left = getMovePosition(coordinateX, wallSize, spiderSize) + 'px';
  spider.style.top = getMovePosition(coordinateY, wallSize, spiderSize) + 'px';
});

function getMovePosition(coordinate, wallSize, spiderSize) {
  if (coordinate < 0) {
    return 0;
  }

  if (coordinate > wallSize - spiderSize) {
    return wallSize - spiderSize;
  }

  return coordinate;
}
