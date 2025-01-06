'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const clickX = e.clientX;
  const clickY = e.clientY;

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const newX = clickX - wallRect.left - spiderRect.width / 2;
  const newY = clickY - wallRect.top - spiderRect.height / 2;

  const maxX = wallRect.width - spiderRect.width;
  const maxY = wallRect.height - spiderRect.height;

  const finalX = Math.max(0, Math.min(newX, maxX));
  const finalY = Math.max(0, Math.min(newY, maxY));

  spider.style.position = 'absolute';
  spider.style.left = `${finalX}px`;
  spider.style.top = `${finalY}px`;
});
