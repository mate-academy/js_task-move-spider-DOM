'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall').getBoundingClientRect();

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  const spiderCoords = {
    top: e.clientY - wall.top - e.target.clientTop - spider.clientHeight / 2,
    left: e.clientX - wall.left - e.target.clientLeft - spider.clientWidth / 2,
  };

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  if (spiderCoords.left + spider.clientWidth > e.target.clientWidth) {
    spiderCoords.left = e.target.clientWidth - spider.clientWidth;
  }

  if (spiderCoords.top + spider.clientHeight > e.target.clientHeight) {
    spiderCoords.top = e.target.clientHeight - spider.clientHeight;
  }

  spider.style.top = `${spiderCoords.top}px`;
  spider.style.left = `${spiderCoords.left}px`;
});
