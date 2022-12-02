'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const field = e.target.closest('.wall');
  const wallCoords = wall.getBoundingClientRect();

  const spiderCoords = {
    left:
      e.clientX - wallCoords.left - wall.clientLeft - spider.clientWidth / 2,
    top:
      e.clientY - wallCoords.top - wall.clientTop - spider.clientHeight / 2,
  };

  if (!field) {
    return;
  }

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  if (spiderCoords.left + spider.clientWidth > wall.clientWidth) {
    spiderCoords.left = wall.clientWidth - spider.clientWidth;
  }

  if (spiderCoords.top + spider.clientHeight > wall.clientHeight) {
    spiderCoords.top = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = spiderCoords.left + 'px';
  spider.style.top = spiderCoords.top + 'px';
});
