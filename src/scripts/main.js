'use strict';

const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const spiderY = spider.clientHeight / 2;
  const spiderX = spider.clientHeight / 2;

  const wallTarget = wall.getBoundingClientRect();

  const spiderCoords = {
    top: e.clientY - wallTarget.top - wall.clientTop - spiderY,
    left: e.clientX - wallTarget.left - wall.clientLeft - spiderX,
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

  if (!e.target.closest('.wall')) {
    return;
  }

  spider.style.top = spiderCoords.top + 'px';
  spider.style.left = spiderCoords.left + 'px';
});
