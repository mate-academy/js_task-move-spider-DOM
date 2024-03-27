'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target.className !== 'wall') {
    return;
  }

  const possibleWidth = wall.clientWidth - spider.clientWidth;
  const possibleHeight = wall.clientHeight - spider.clientHeight;

  const positionX = e.offsetX - spider.clientWidth / 2;
  const positionY = e.offsetY - spider.clientHeight / 2;

  spider.style.top = `${Math.max(0, Math.min(possibleHeight, positionY))}px`;
  spider.style.left = `${Math.max(0, Math.min(possibleWidth, positionX))}px`;
});
