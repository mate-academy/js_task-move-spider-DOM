'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallCoords = wall.getBoundingClientRect();

  if (
    e.clientX < wallCoords.left ||
    e.clientX > wallCoords.right ||
    e.clientY < wallCoords.top ||
    e.clientY > wallCoords.bottom
  ) {
    return;
  }

  const spiderCoords = {
    left:
      e.clientX - spider.offsetWidth / 2 - wallCoords.left - wall.clientLeft,
    top: e.clientY - spider.offsetHeight / 2 - wallCoords.top - wall.clientTop,
  };

  const maxBorderY =
    wallCoords.height - spider.offsetHeight - wall.clientTop * 2;
  const maxBorderX =
    wallCoords.width - spider.offsetWidth - wall.clientLeft * 2;

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  } else if (spiderCoords.top > maxBorderY) {
    spiderCoords.top = maxBorderY;
  }

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  } else if (spiderCoords.left > maxBorderX) {
    spiderCoords.left = maxBorderX;
  }

  spider.style.transition = 'all 1s';
  spider.style.top = spiderCoords.top + 'px';
  spider.style.left = spiderCoords.left + 'px';
});
