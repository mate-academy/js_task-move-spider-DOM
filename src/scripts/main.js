'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  if (!wall || !spider) {
    return;
  }

  const rect = wall.getBoundingClientRect();

  let h = e.clientY - rect.top - wall.clientTop;
  let w = e.clientX - rect.left - wall.clientLeft;

  w -= spider.clientWidth / 2;
  h -= spider.clientHeight / 2;

  const maxW = wall.clientWidth - spider.clientWidth;
  const maxH = wall.clientHeight - spider.clientHeight;

  if (h < 0) {
    h = 0;
  }

  if (w < 0) {
    w = 0;
  }

  if (h > maxH) {
    h = maxH;
  }

  if (w > maxW) {
    w = maxW;
  }
  spider.style.left = w + 'px';
  spider.style.top = h + 'px';
});
