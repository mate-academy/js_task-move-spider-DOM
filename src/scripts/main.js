'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  const posX = wall.clientWidth - spider.clientWidth;
  const posY = wall.clientHeight - spider.clientHeight;
  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;

  if (x > posX) {
    x = posX;
  }

  if (y > posY) {
    y = posY;
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
