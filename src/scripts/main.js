'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const rectWall = wall.getBoundingClientRect();

  if (
    x < rectWall.left ||
    x > rectWall.right ||
    y < rectWall.top ||
    y > rectWall.bottom
  ) {
    return;
  }

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;
  const relativeX = e.offsetX - spider.offsetWidth / 2;
  const relativeY = e.offsetY - spider.offsetHeight / 2;
  const limitedX = Math.min(maxX, Math.max(0, relativeX));
  const limitedY = Math.min(maxY, Math.max(0, relativeY));

  spider.style.position = 'absolute';
  spider.style.left = `${limitedX}px`;
  spider.style.top = `${limitedY}px`;
});
