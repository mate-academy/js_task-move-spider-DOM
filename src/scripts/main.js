'use strict';

document.addEventListener('click', event => {
  const wall = document.querySelector('.wall');
  const spider = wall.querySelector('.spider');
  const spiderDimensions = spider.getBoundingClientRect();

  if (event.target !== wall) {
    return;
  }

  let coordX = event.offsetX - spiderDimensions.width / 2;
  let coordY = event.offsetY - spiderDimensions.height / 2;

  function boundaryCoords(coord, wallSize, spiderSize) {
    if (coord < 0) {
      return 0;
    } else
    if (coord > wallSize - spiderSize) {
      return wallSize - spiderSize;
    } else {
      return coord;
    }
  }

  coordX = boundaryCoords(coordX, wall.clientWidth, spiderDimensions.width);
  coordY = boundaryCoords(coordY, wall.clientHeight, spiderDimensions.height);

  spider.style.left = `${coordX}px`;
  spider.style.top = `${coordY}px`;
});
