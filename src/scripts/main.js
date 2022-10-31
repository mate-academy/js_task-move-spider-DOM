'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  };

  let x = e.offsetX - spider.clientHeight / 2;
  let y = e.offsetY - spider.clientHeight / 2;

  const coordX = wall.clientWidth - spider.clientWidth;
  const coordY = wall.clientHeight - spider.clientHeight;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > coordX) {
    x = coordX;
  }

  if (y > coordY) {
    y = coordY;
  }

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
