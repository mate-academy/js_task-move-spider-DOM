'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');

  if (e.target.className !== 'wall') {
    return;
  }

  const spider = document.querySelector('.spider');

  const posibleWidth = wall.clientWidth - spider.clientWidth;
  const posibleHeight = wall.clientHeight - spider.clientHeight;

  const positionX = e.offsetX - spider.clientWidth / 2;
  const positionY = e.offsetY - spider.clientHeight / 2;

  const spiderX = Math.max(Math.min(positionX, posibleWidth), 0);
  const spiderY = Math.max(Math.min(positionY, posibleHeight), 0);

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
