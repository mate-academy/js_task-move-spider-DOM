'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  };

  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientWidth / 2;

  const widthLimit = wall.clientWidth - spider.clientWidth;
  const heightLimit = wall.clientHeight - spider.clientHeight;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > widthLimit) {
    x = widthLimit;
  }

  if (y > heightLimit) {
    y = heightLimit;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
