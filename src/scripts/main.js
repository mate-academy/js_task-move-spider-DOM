'use strict';

const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const coords = {
    x: event.offsetX - spider.clientWidth / 2,
    y: event.offsetY - spider.clientHeight / 2,
  };

  if (event.target !== wall) {
    return;
  }

  function getCorrds(coord, wallSize, spiderSize) {

    const wallArea = wallSize - spiderSize

    if (coord < 0) {
      return 0;
    }

    if (coord > wallArea) {
      return wallArea;
    }

    return coord;
  }

  coords.x = getCorrds(coords.x, wall.clientWidth, spider.clientWidth);
  coords.y = getCorrds(coords.y, wall.clientHeight, spider.clientHeight);

  spider.style.left = `${coords.x}px`;
  spider.style.top = `${coords.y}px`;
});
