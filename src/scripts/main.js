'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const halfSpiderWidth = spiderRect.width / 2;
  const halfSpiderHeight = spiderRect.height / 2;

  const clickX =
    e.clientX - wallRect.left - (wallRect.width - wall.clientWidth) / 2;
  const clickY =
    e.clientY - wallRect.top - (wallRect.height - wall.clientHeight) / 2;

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const clickMinX = halfSpiderWidth;
  const clickMaxX = wallWidth - halfSpiderWidth;

  const clickMinY = halfSpiderHeight;
  const clickMaxY = wallHeight - halfSpiderHeight;

  const newX = Math.min(Math.max(clickX, clickMinX), clickMaxX);
  const newY = Math.min(Math.max(clickY, clickMinY), clickMaxY);

  spider.style.left = `${newX - halfSpiderWidth}px`;
  spider.style.top = `${newY - halfSpiderHeight}px`;
});
