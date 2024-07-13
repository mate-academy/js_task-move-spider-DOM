'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  const y = wall.clientHeight - spider.clientHeight;
  const x = wall.clientWidth - spider.clientWidth;

  const positionX = e.offsetX - spider.clientWidth / 2;
  const positionY = e.offsetY - spider.clientHeight / 2;

  spider.style.top = `${Math.max(Math.min(y, positionY), 0)}px`;
  spider.style.left = `${Math.max(Math.min(x, positionX), 0)}px`;
});
