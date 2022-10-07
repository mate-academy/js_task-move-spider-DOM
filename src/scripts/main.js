'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const min = spider.clientWidth / 2;
  const max = wall.clientWidth - min;

  if (e.target === wall) {
    spider.style.top = `${Math.min(Math.max(e.offsetY, min), max)}px`;
    spider.style.left = `${Math.min(Math.max(e.offsetX, min), max)}px`;
    spider.style.transform = 'translate(-50%, -50%)';
  }
});
