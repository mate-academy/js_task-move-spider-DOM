'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const spiderRect = spider.getBoundingClientRect();
  const spiderHalfWidth = spiderRect.width / 2;
  const spiderHalfHeight = spiderRect.height / 2;

  let targetX = e.clientX - wallRect.left - spiderHalfWidth;
  let targetY = e.clientY - wallRect.top - spiderHalfHeight;

  targetX = Math.max(0, Math.min(targetX, wallRect.width - spiderRect.width));
  targetY = Math.max(0, Math.min(targetY, wallRect.height - spiderRect.height));

  spider.style.position = 'absolute';
  spider.style.left = `${targetX}px`;
  spider.style.top = `${targetY}px`;
});
