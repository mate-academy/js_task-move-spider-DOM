'use strict';

document.addEventListener('click', (e) => {
  const clickY = e.clientY;
  const clickX = e.clientX;

  const spider = document.querySelector('.spider');
  const spiderRect = spider.getBoundingClientRect();
  const wall = document.querySelector('.wall');
  const wallRect = wall.getBoundingClientRect();

  let positionX = clickX - spiderRect.width / 2;
  let positionY = clickY - spiderRect.height / 2;

  const minX = wallRect.left;
  const maxX = wallRect.right - spiderRect.width;

  const minY = wallRect.top;
  const maxY = wallRect.bottom - spiderRect.height;

  if (positionX < minX) {
    positionX = minX;
  }

  if (positionX > maxX) {
    positionX = maxX;
  }

  if (positionY < minY) {
    positionY = minY;
  }

  if (positionY > maxY) {
    positionY = maxY;
  }

  spider.style.position = 'fixed';
  spider.style.left = `${positionX}px`;
  spider.style.top = `${positionY}px`;
});
