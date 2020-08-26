'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallSize = wall.clientWidth;
const spiderSize = spider.clientWidth;

document.addEventListener('click', event => {
  if (event.target !== wall) {
    return;
  }

  const spiderX = event.offsetX - (spiderSize / 2);
  const spiderY = event.offsetY - (spiderSize / 2);

  spider.style.left = calcCoord(spiderX) + 'px';
  spider.style.top = calcCoord(spiderY) + 'px';

  function calcCoord(coord) {
    if (coord > wallSize - spiderSize) {
      return wallSize - spiderSize;
    } else if (coord < 0) {
      return 0;
    }

    return coord;
  }
});
