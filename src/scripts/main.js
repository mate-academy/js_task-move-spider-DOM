'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const spiderCoords = spider.getBoundingClientRect();
  const wallCoords = wall.getBoundingClientRect();

  let left = e.clientX - wallCoords.left
    - wall.clientLeft - spiderCoords.width / 2;
  let topO = e.clientY - wallCoords.top
    - wall.clientTop - spiderCoords.height / 2;

  if (left < 0) {
    left = 0;
  }

  if (left > wallCoords.width - wall.clientLeft * 2 - spiderCoords.width) {
    left = wallCoords.width - wall.clientLeft * 2 - spiderCoords.width;
  }

  if (topO < 0) {
    topO = 0;
  }

  if (topO > wallCoords.height - wall.clientTop * 2 - spiderCoords.height) {
    topO = wallCoords.height - wall.clientTop * 2 - spiderCoords.height;
  }

  spider.style.left = left + 'px';
  spider.style.top = topO + 'px';
});
