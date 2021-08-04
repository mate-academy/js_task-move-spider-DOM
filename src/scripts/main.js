'use strict';

document.addEventListener('click', e => {
  // write code here
  if (e.target.className !== 'wall') {
    return;
  }

  const wall = document.querySelector('.wall');
  const fieldCoords = wall.getBoundingClientRect();
  const spider = document.querySelector('.spider');
  const spiderCoords = {
    top: e.clientY - fieldCoords.top - wall.clientTop
    - spider.clientHeight / 2,
    left: e.clientX - fieldCoords.left - wall.clientLeft
    - spider.clientWidth / 2,
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

  spider.style.top = `${spiderCoords.top}px`;
  spider.style.left = `${spiderCoords.left}px`;
});
