'use strict';

const HALF = 2;
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (!wall) {
  throw new Error('Wall element not found');
}

if (!spider) {
  throw new Error('Spider element not found');
}

wall.addEventListener('click', (e) => {
  const wallCoords = wall.getBoundingClientRect();

  const spiderCoords = {
    top:
      e.clientY - wallCoords.top - wall.clientTop - spider.clientHeight / HALF,
    left:
      e.clientX - wallCoords.left - wall.clientLeft - spider.clientWidth / HALF,
  };

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  if (spiderCoords.top + spider.clientHeight > wall.clientHeight) {
    spiderCoords.top = wall.clientHeight - spider.clientHeight;
  }

  if (spiderCoords.left + spider.clientWidth > wall.clientWidth) {
    spiderCoords.left = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = `${spiderCoords.top}px`;
  spider.style.left = `${spiderCoords.left}px`;
});
