'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const clickX = e.clientX;
  const clickY = e.clientY;

  const spiderCenterX = spiderRect.left + spiderRect.width / 2;
  const spiderCenterY = spiderRect.top + spiderRect.height / 2;

  left = Math.max(0, Math.min(clickX - wallRect.left - spiderRect.width / 2));
  top = Math.max(0, Math.min(clickY - wallRect.top - spiderRect.height / 2));

  spider.style.left = `${left}px`;
  spider.style.top = `${top}px`;
});
