'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target === wall) {
    spider.style.top = `${e.offsetY - spider.clientHeight / 2}px`;
    spider.style.left = `${e.offsetX - spider.clientWidth / 2}px`;

    if (e.offsetY < spider.clientHeight / 2) {
      spider.style.top = 0;
    }

    if (e.offsetY > wall.clientHeight - spider.clientHeight / 2) {
      spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
    }

    if (e.offsetX < spider.clientWidth / 2) {
      spider.style.left = 0;
    }

    if (e.offsetX > wall.clientWidth - spider.clientWidth / 2) {
      spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
    }
  }
});
