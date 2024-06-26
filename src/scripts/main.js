'use strict';

document.addEventListener('click', (e) => {
  // write code here

  const wall = document.querySelector('.wall');
  const spider = wall.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const min = 0;
  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;

  if (x < min) {
    x = min;
  }

  if (y < min) {
    y = min;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
