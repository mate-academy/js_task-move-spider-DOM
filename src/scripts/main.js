'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const border = wall.clientLeft;

document.addEventListener('click', e => {
  const spiderCoords = spider.getBoundingClientRect();
  const wallCoords = wall.getBoundingClientRect();
  const maxX = wallCoords.width - border * 2 - spiderCoords.width;
  const maxY = wallCoords.height - border * 2 - spiderCoords.height;

  if (!e.target.closest('.wall')) {
    return;
  }

  let left = e.clientX - wallCoords.left
    - wall.clientLeft - spiderCoords.width / 2;
  let topO = e.clientY - wallCoords.top
    - wall.clientTop - spiderCoords.height / 2;

  if (left < 0) {
    left = 0;
  }

  if (left > maxX) {
    left = maxX;
  }

  if (topO < 0) {
    topO = 0;
  }

  if (topO > maxY) {
    topO = maxY;
  }

  spider.style.left = left + 'px';
  spider.style.top = topO + 'px';
});
