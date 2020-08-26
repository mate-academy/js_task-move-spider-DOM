'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

function boundaryCoords(offsetTarget, wallSize, spiderSize) {
  if ((offsetTarget - spiderSize / 2) < 0) {
    return 0;
  } else if ((offsetTarget + spiderSize / 2) > wallSize) {
    return wallSize - spiderSize;
  } else {
    return offsetTarget - spiderSize / 2;
  }
}

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  const coordsX = boundaryCoords(e.offsetX,
    wall.clientWidth, spider.clientWidth);
  const coordsY = boundaryCoords(e.offsetY,
    wall.clientHeight, spider.clientHeight);

  spider.style.cssText = `
    top: ${coordsY}px;
    left: ${coordsX}px;
  `;
});
