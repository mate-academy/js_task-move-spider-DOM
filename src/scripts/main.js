'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const maxTop = wall.clientHeight - spider.clientHeight;
  const maxLeft = wall.clientWidth - spider.clientWidth;

  if (e.target === wall) {
    spider.style.left = `${e.clientX - wall.offsetLeft
      - spider.clientWidth / 2 - wall.clientLeft}px`;

    spider.style.top = `${e.clientY - wall.offsetTop
      - spider.clientHeight / 2 - wall.clientTop}px`;

    if (parseFloat(spider.style.left) < 0) {
      spider.style.left = 0;
    }

    if (parseFloat(spider.style.top) < 0) {
      spider.style.top = 0;
    }

    if (parseFloat(spider.style.left) > maxLeft) {
      spider.style.left = `${maxLeft}px`;
    }

    if (parseFloat(spider.style.top) > maxTop) {
      spider.style.top = `${maxTop}px`;
    }
  }
});
