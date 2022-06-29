'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const maxX = wall.clientWidth - spider.width;
  const maxY = wall.clientHeight - spider.height;

  if (e.target !== wall) {
    return;
  }

  let x = e.clientX - spider.width / 2;
  let y = e.clientY - spider.height / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
