'use strict';

document.addEventListener('click', e => {

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallPosition = wall.getBoundingClientRect();

  const spiderPosition = {
    left: e.clientX - wallPosition.left
          - wall.clientLeft - spider.offsetWidth / 2,
    top: e.clientY - wallPosition.top
          - wall.clientTop - spider.offsetWidth / 2,
  };

  if (spiderPosition.left < 0) {
    spiderPosition.left = 0;
  }

  if (spiderPosition.top < 0) {
    wallPosition.top = 0;
  }

  if (spiderPosition.left + spider.clientWidth > wall.clientWidth) {
    spiderPosition.left = wall.clientWidth - spider.clientWidth;
  }

  if (spiderPosition.top + spider.clientHeight > wall.clientHeight) {
    spiderPosition.top = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${spiderPosition.left}px`;
  spider.style.top = `${spiderPosition.top}px`;
});
