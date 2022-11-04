'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  let x = Math.round(e.offsetX - spider.offsetWidth / 2);
  let y = Math.round(e.offsetY - spider.offsetHeight / 2);

  const maxY = wall.clientHeight - spider.clientHeight;
  const maxX = wall.clientWidth - spider.clientWidth;

  if (x < 0) {
    x = 0;
  };

  if (y < 0) {
    y = 0;
  };

  if (x > maxX) {
    x = maxX;
  };

  if (y > maxY) {
    y = maxY;
  };

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
