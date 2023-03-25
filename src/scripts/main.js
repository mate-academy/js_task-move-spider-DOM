'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const maxW = wall.clientWidth - spider.clientWidth;
  const maxH = wall.clientHeight - spider.clientHeight;

  const click = e.target.closest('.wall');

  if (!click) {
    return;
  }

  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > maxW) {
    x = maxW;
  }

  if (y > maxH) {
    y = maxH;
  }

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
