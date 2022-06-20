'use strict';

document.addEventListener('click', e => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;
  let y = e.offsetY - spider.height / 2;
  let x = e.offsetX - spider.width / 2;

  if (e.target !== wall) {
    return;
  }

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
