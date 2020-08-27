'use strict';

document.addEventListener('click', event => {
  const eventY = event.clientY;
  const eventX = event.clientX;
  const wall = document.querySelector('.wall');
  const wallHeight = wall.clientHeight;
  const wallWidth = wall.clientWidth;
  const wallTopCoord = wall.getBoundingClientRect().top;
  const wallLeftCoord = wall.getBoundingClientRect().left;
  const wallY = wall.clientTop;
  const wallX = wall.clientLeft;
  const spider = document.querySelector('.spider');
  const spiderHeight = spider.offsetHeight;
  const spiderWidth = spider.offsetWidth;

  function setSpiderCoords(eventCoord, wallSideCoord,
    wallCoord, spiderSize, wallSize) {
    let coord = eventCoord - wallSideCoord - wallCoord - spiderSize / 2;

    if (coord < 0) {
      coord = 0;
    }

    if (coord > wallSize - wallCoord - spiderSize) {
      coord = wallSize - spiderSize;
    }

    return coord;
  }

  const spiderY = setSpiderCoords(eventY, wallTopCoord,
    wallY, spiderHeight, wallHeight);
  const spiderX = setSpiderCoords(eventX, wallLeftCoord,
    wallX, spiderWidth, wallWidth);

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});
