'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  let shiftX = e.offsetX - spider.width / 2;
  let shiftY = e.offsetY - spider.height / 2;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  if (e.target !== wall) {
    return;
  }

  if (shiftX > maxX) {
    shiftX = maxX;
  }

  if (shiftX < 0) {
    shiftX = 0;
  }

  if (shiftY > maxY) {
    shiftY = maxY;
  }

  if (shiftY < 0) {
    shiftY = 0;
  }
  spider.style.left = shiftX + 'px';
  spider.style.top = shiftY + 'px';
});
