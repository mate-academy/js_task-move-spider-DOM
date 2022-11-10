'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const wallRect = e.target.getBoundingClientRect();
  const { y, x } = {
    y: e.clientY - wallRect.y - wall.clientTop - (spider.offsetHeight / 2),
    x: e.clientX - wallRect.x - wall.clientLeft - (spider.offsetWidth / 2),
  };

  spider.style.cssText = `
    top: ${getCoords(y, wall.clientHeight, spider.offsetHeight)}px;
    left: ${getCoords(x, wall.clientWidth, spider.offsetWidth)}px;
  `;
});

function getCoords(eCoords, wallSize, spiderSize) {
  if (eCoords < 0) {
    return 0;
  }

  return eCoords > (wallSize - spiderSize)
    ? wallSize - spiderSize
    : eCoords;
}
