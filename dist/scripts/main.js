'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', f);

function f(event) {
  // write code here
  const coordinatesWall = wall.getBoundingClientRect();
  const spiderCoordinates = {
    top: event.clientY
      - coordinatesWall.top
      - wall.clientTop - spider.clientHeight / 2,
    left: event.clientX
      - coordinatesWall.left - wall.clientLeft
      - spider.clientWidth / 2,
  };

  if (spiderCoordinates.top < 0) {
    spiderCoordinates.top = 0;
  }

  if (spiderCoordinates.left < 0) {
    spiderCoordinates.left = 0;
  }

  if (spiderCoordinates.left + spider.clientHeight > wall.clientWidth) {
    spiderCoordinates.left = wall.clientWidth - spider.clientWidth;
  }

  if (spiderCoordinates.top + spider.clientHeight > wall.clientHeight) {
    spiderCoordinates.top = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = spiderCoordinates.left + 'px';
  spider.style.top = spiderCoordinates.top + 'px';
};
