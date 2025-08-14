'use strict';
/* eslint no-console: ["error", { allow: ["warn", "log"] }] */

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!e.target.closest('.wall')) {
    return;
  }

  const wallCoords = wall.getBoundingClientRect();
  const spiderCoords = {
    x: e.clientX - wallCoords.left - wall.clientLeft - spider.offsetWidth / 2,
    y: e.clientY - wallCoords.top - wall.clientTop - spider.offsetHeight / 2,
  };

  if (spiderCoords.x < 0) {
    spiderCoords.x = 0;
  }

  if (spiderCoords.y < 0) {
    spiderCoords.y = 0;
  }

  if (spiderCoords.x + spider.clientWidth > wall.clientWidth) {
    spiderCoords.x = wall.clientWidth - spider.clientWidth;
  }

  if (spiderCoords.y + spider.clientHeight > wall.clientHeight) {
    spiderCoords.y = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = spiderCoords.x + 'px';
  spider.style.top = spiderCoords.y + 'px';
});
