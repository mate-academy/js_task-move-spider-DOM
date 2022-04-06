'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target === wall) {
    spider.style.top = `${e.offsetY - spider.clientHeight / 2}px`;
    spider.style.left = `${e.offsetX - spider.clientWidth / 2}px`;

    if (e.offsetY < 25) {
      spider.style.top = 0;
    }

    if (e.offsetY > 375) {
      spider.style.top = '350px';
    }

    if (e.offsetX < 25) {
      spider.style.left = 0;
    }

    if (e.offsetX > 375) {
      spider.style.left = '350px';
    }
  }
});
