'use strict';

document.addEventListener('click', e => {
  if (e.target !== document.querySelector('.wall')) {
    return;
  }

  const wall = e.target;
  const spider = document.querySelector('.spider');

  const yMax = wall.clientHeight - spider.clientHeight;
  const xMax = wall.clientWidth - spider.clientWidth;
  let y = e.offsetY - (spider.clientHeight / 2);
  let x = e.offsetX - (spider.clientWidth / 2);

  if (y > yMax) {
    y = yMax;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > xMax) {
    x = xMax;
  }

  if (x < 0) {
    x = 0;
  }

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
