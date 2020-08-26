'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (event) => {
  if (event.target !== wall) {
    return;
  }

  let topCoords = event.offsetY - spider.clientHeight / 2;
  let leftCoords = event.offsetX - spider.clientWidth / 2;

  topCoords = checkCoods(topCoords, spider.clientHeight, wall.clientHeight);
  leftCoords = checkCoods(leftCoords, spider.clientWidth, wall.clientWidth);

  spider.style.top = `${topCoords}px`;
  spider.style.left = `${leftCoords}px`;

  function checkCoods(coord, spiderSize, wallSize) {
    if (coord < 0) {
      return 0;
    }

    if (coord > wallSize - spiderSize) {
      return wallSize - spiderSize;
    }

    return coord;
  }
});
