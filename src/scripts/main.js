'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', element => {
  const wallCoords = wall.getBoundingClientRect();

  const spiderCoords = {
    x: element.clientY - wallCoords.top
    - wall.clientTop - spider.clientHeight / 2,
    y: element.clientX - wallCoords.left
     - wall.clientLeft - spider.clientWidth / 2,
  };

  if (spiderCoords.x < 0) {
    spiderCoords.x = 0;
  }

  if (spiderCoords.y < 0) {
    spiderCoords.y = 0;
  }

  if (spiderCoords.y + spider.clientWidth > wall.clientWidth) {
    spiderCoords.y = wall.clientWidth - spider.clientWidth;
  }

  if (spiderCoords.x + spider.clientHeight > wall.clientHeight) {
    spiderCoords.x = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${spiderCoords.y}px`;
  spider.style.top = `${spiderCoords.x}px`;
});
