'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return;
  }

  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientWidth / 2;
  const shiftX = wall.clientWidth - spider.clientWidth;
  const shiftY = wall.clientHeight - spider.clientHeight;

  if (x < 0) {
    x = 0;
  };

  if (x > shiftX) {
    x = shiftX;
  };

  if (y < 0) {
    y = 0;
  };

  if (y > shiftY) {
    y = shiftY;
  };

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
