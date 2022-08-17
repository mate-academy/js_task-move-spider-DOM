'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallBorder = wall.clientLeft;

document.addEventListener('click', e => {
  const spiderCoords = spider.getBoundingClientRect();
  const wallCoords = wall.getBoundingClientRect();
  const maxX = wallCoords.width - wallBorder * 2 - spiderCoords.width;
  const maxY = wallCoords.height - wallBorder * 2 - spiderCoords.height;

  if (!e.target.closest('.wall')) {
    return;
  }

  let left = e.clientX - wallCoords.left
    - wall.clientLeft - spiderCoords.width / 2;

  let topp = e.clientY - wallCoords.top
    - wall.clientTop - spiderCoords.height / 2;

  if (left < 0) {
    left = 0;
  }

  if (left > maxX) {
    left = maxX;
  }

  if (topp < 0) {
    topp = 0;
  }

  if (topp > maxY) {
    topp = maxY;
  }

  spider.style.left = left + 'px';
  spider.style.top = topp + 'px';
});
