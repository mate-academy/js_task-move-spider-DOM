'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spiderSize = spider.clientWidth;
  const wallSize = wall.clientWidth;

  const mouseX = e.offsetX - (spiderSize / 2);
  const mouseY = e.offsetY - (spiderSize / 2);

  const sizeDifference = wallSize - spiderSize;

  spider.style.top = `${getNormalizedCoord(mouseY, sizeDifference)}px`;
  spider.style.left = `${getNormalizedCoord(mouseX, sizeDifference)}px`;
});

function getNormalizedCoord(coord, max) {
  if (coord < 0) {
    return 0;
  }

  if (coord > max) {
    return max;
  }

  return coord;
}
