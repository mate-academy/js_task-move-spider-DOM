'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');

  if (!wall || !wall.contains(e.target)) {
    return;
  }

  const spider = document.querySelector('.spider');
  const posibleWidth = wall.clientWidth - spider.clientWidth;
  const posibleHeight = wall.clientHeight - spider.clientHeight;

  const wallRect = wall.getBoundingClientRect();

  const clickXInWall = e.clientX - wallRect.left;
  const clickYInWall = e.clientY - wallRect.top;

  const positionX = clickXInWall - spider.clientWidth / 2;
  const positionY = clickYInWall - spider.clientHeight / 2;

  const spiderX = Math.max(Math.min(positionX, posibleWidth), 0);
  const spiderY = Math.max(Math.min(positionY, posibleHeight), 0);

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
