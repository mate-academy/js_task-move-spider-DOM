'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const maxY = e.target.clientHeight - spider.clientHeight;
  const maxX = e.target.clientWidth - spider.clientWidth;

  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
