'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  };

  const maxWidth = wall.clientWidth - spider.clientWidth;
  const maxHeigth = wall.clientHeight - spider.clientHeight;
  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;

  if (x < 1) {
    x = 0;
  }

  if (y < 1) {
    y = 0;
  }

  if (maxWidth < x) {
    x = maxWidth;
  }

  if (maxHeigth < y) {
    y = maxHeigth;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
