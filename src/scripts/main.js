'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target === wall) {
    const maxX = wall.clientWidth - spider.clientWidth;
    const maxY = wall.clientHeight - spider.clientHeight;
    let x = e.offsetX - spider.clientWidth / 2;
    let y = e.offsetY - spider.clientHeight / 2;

    if (y > maxY) {
      y = maxY;
    }

    if (x > maxX) {
      x = maxX;
    }

    if (y < 0) {
      y = 0;
    }

    if (x < 0) {
      x = 0;
    }

    spider.style.top = y + 'px';
    spider.style.left = x + 'px';
  }
});
