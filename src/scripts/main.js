'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!e.target.closest('.wall')) {
    return;
  };

  const cHeight = wall.clientHeight - spider.clientHeight;
  const cWidth = wall.clientWidth - spider.clientWidth;

  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;

  if (x < 1) {
    x = 0;
  }

  if (y < 1) {
    y = 0;
  }

  if (y > cHeight) {
    y = cHeight;
  }

  if (x > cWidth) {
    x = cWidth;
  }

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
