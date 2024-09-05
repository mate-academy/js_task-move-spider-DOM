'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // write code here

  const fieldCoords = wall.getBoundingClientRect();
  const innerFieldCoords = {
    top: fieldCoords.top + wall.clientTop,
    left: fieldCoords.left + wall.clientLeft,
  };
  const spiderCoords = {
    top: e.clientY - innerFieldCoords.top - spider.clientHeight / 2,
    left: e.clientX - innerFieldCoords.left - spider.clientWidth / 2,
  };

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
