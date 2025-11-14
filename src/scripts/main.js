'use strict';

document.addEventListener('click', (event) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const clickX = event.clientX;
  const clickY = event.clientY;

  let left = clickX - wallRect.left - spiderRect.width / 2;
  let top = clickY - wallRect.top - spiderRect.height / 2;

  const maxLeft = wallRect.width - spiderRect.width;
  const maxTop = wallRect.height - spiderRect.height;

  left = Math.max(0, Math.min(left, maxLeft));
  top = Math.max(0, Math.min(top, maxTop));

  spider.style.left = `${left}px`;
  spider.style.top = `${top}px`;
});
