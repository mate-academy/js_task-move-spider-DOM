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

  const mathMinY = Math.min(possibleHeight, positionY);
  const mathMaxY = Math.max(0, mathMinY);

  const mathMinX = Math.min(possibleWidth, positionX);
  const mathMaxX = Math.max(0, mathMinX);

  spider.style.top = `${mathMaxY}px`;
  spider.style.left = `${mathMaxX}px`;
});
