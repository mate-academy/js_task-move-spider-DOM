'use strict';

document.addEventListener('click', event => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const coords = {
    x: event.offsetX - (spider.clientWidth / 2),
    y: event.offsetY - (spider.clientHeight / 2),
  };

  if (event.target !== wall) {
    return;
  }

  function boundCoords(coord, wallSize, spiderSize) {
    const wallArea = wallSize - spiderSize;

    if (coord < 0) {
      return 0;
    } else if (coord > wallArea) {
      return wallArea;
    } else {
      return coord;
    }
  }

  coords.x = boundCoords(coords.x, wall.clientWidth, spider.clientWidth);
  coords.y = boundCoords(coords.y, wall.clientHeight, spider.clientHeight);

  spider.style.left = `${coords.x}px`;
  spider.style.top = `${coords.y}px`;
});
