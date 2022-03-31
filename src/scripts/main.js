'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;

  const xMax = wall.clientWidth - spider.clientWidth;
  const yMax = wall.clientHeight - spider.clientHeight;

  if (!e.target.closest('.wall')) {
    return;
  }

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > xMax) {
    x = xMax;
  }

  if (y > yMax) {
    y = yMax;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
