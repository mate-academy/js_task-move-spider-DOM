'use strict';

document.querySelector('.wall').addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallRect = wall.getBoundingClientRect();

  const maxX = wallRect.width - spiderWidth;
  const maxY = wallRect.height - spiderHeight;

  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  let newX = clickX - spiderWidth / 2;
  let newY = clickY - spiderHeight / 2;

  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
