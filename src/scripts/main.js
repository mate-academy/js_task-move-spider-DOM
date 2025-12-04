'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallsPosition = wall.getBoundingClientRect();

  const wallsLeftBound = wall.clientLeft;
  const wallsTopBound = wall.clientTop;

  const xInWall = e.clientX - wallsPosition.x;
  const yInWall = e.clientY - wallsPosition.y;

  const xNew = xInWall - wallsLeftBound - spider.offsetWidth / 2;
  const yNew = yInWall - wallsTopBound - spider.offsetHeight / 2;

  const xMax = wall.clientWidth - spider.offsetWidth;
  const yMax = wall.clientHeight - spider.offsetHeight;

  spider.style.left = Math.max(0, Math.min(xMax, xNew)) + 'px';
  spider.style.top = Math.max(0, Math.min(yMax, yNew)) + 'px';
});
