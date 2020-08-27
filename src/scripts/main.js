'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderSize = spider.offsetWidth;
const wallSize = wall.clientWidth;

document.addEventListener('click', (event) => {
  // write code here
  if (event.target !== wall) {
    return;
  }

  const coordY = event.offsetY - spiderSize / 2;
  const coordX = event.offsetX - spiderSize / 2;

  function getCoords(coords) {
    if (coords > wallSize - spiderSize) {
      return wallSize - spiderSize;
    }

    if (coords < 0) {
      return 0;
    }

    return coords;
  };

  spider.style.cssText = `
    top: ${getCoords(coordY)}px;
    left: ${getCoords(coordX)}px;
  `;
});
