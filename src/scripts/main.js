'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  let x = e.offsetX - spider.width / 2;
  let y = e.offsetY - spider.height / 2;

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
