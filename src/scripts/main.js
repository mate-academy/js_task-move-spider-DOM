'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  const maxWidth = wall.clientWidth - spider.clientWidth;
  const maxHeight = wall.clientHeight - spider.clientHeight;

  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (maxWidth < x) {
    x = maxWidth;
  }

  if (maxHeight < y) {
    y = maxHeight;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
