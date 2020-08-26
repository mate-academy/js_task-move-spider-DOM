'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallSize = parseInt(window.getComputedStyle(wall).width);
const spiderSize = parseInt(window.getComputedStyle(spider).width);
const maxCoord = wallSize - (spiderSize / 2);

wall.addEventListener('click', e => {
  function getDistance(coord) {
    return coord > maxCoord
    ? maxCoord
    : coord < spiderSize / 2
      ? spiderSize / 2 : coord;
  }

  const x = getDistance(e.offsetX);
  const y = getDistance(e.offsetY);

  spider.style.cssText = `top: ${y}px; left: ${x}px;
  transform: translate(-50%, -50%);
  pointer-events: none;`;
});
