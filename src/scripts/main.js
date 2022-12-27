'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target === wall) {
    spider.style.top = `${e.offsetY}px`;
    spider.style.left = `${e.offsetX}px`;
    spider.style.transform = 'translate(-50%, -50%)';
  }
});
