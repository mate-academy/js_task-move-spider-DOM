'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const clickCoordX = e.clientX;
  const clickCoordY = e.clientY;

  const spiderWidth = spider.getBoundingClientRect().width;
  const spiderHeight = spider.getBoundingClientRect().height;

  let targetX = clickCoordX - spiderWidth / 2;
  let targetY = clickCoordY - spiderHeight / 2;

  const wallRect = wall.getBoundingClientRect();

  if (targetX < wallRect.left) {
    targetX = wallRect.left;
  } else if (targetX + spiderWidth > wallRect.right) {
    targetX = wallRect.right - spiderWidth;
  }

  if (targetY < wallRect.top) {
    targetY = wallRect.top;
  } else if (targetY + spiderHeight > wallRect.bottom) {
    targetY = wallRect.bottom - spiderHeight;
  }

  spider.style.left = `${targetX - wallRect.left}px`;
  spider.style.top = `${targetY - wallRect.top}px`;
});
