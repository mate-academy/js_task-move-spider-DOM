'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

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
    top: e.clientY - wallCoords.top - wall.clientTop - spider.clientHeight / 2,
    left:
      e.clientX - wallCoords.left - wall.clientLeft - spider.clientWidth / 2,
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

  spider.style.left = `${spiderCoords.left}px`;
  spider.style.top = `${spiderCoords.top}px`;
});
