'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!e.target.closest('.wall') || e.target.closest('.spider')) {
    return;
  };

  const coordX = wall.clientWidth - spider.clientWidth;
  const coordY = wall.clientHeight - spider.clientHeight;

  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;

  if (x < 0) {
    x = 0;
  };

  if (y < 0) {
    y = 0;
  };

  if (x > coordX) {
    x = coordX;
  }

  if (y > coordY) {
    y = coordY;
  }
  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
