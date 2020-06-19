'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const wallCoodr = wall.getBoundingClientRect();
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const spiderCoord = {
    top: e.clientX - wallCoodr.x - wall.clientTop - spider.clientWidth / 2,
    left: e.clientY - wallCoodr.y - wall.clientLeft - spider.clientHeight / 2,
  };

  if (spiderCoord.left < 0) {
    spiderCoord.left = 0;
  }

  if (spiderCoord.top < 0) {
    spiderCoord.top = 0;
  }

  if (spiderCoord.top + spider.clientWidth > wall.clientWidth) {
    spiderCoord.top = wall.clientWidth - spider.clientWidth;
  }

  if (spiderCoord.left + spider.clientHeight > wall.clientHeight) {
    spiderCoord.left = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = spiderCoord.top + 'px';
  spider.style.top = spiderCoord.left + 'px';
});
