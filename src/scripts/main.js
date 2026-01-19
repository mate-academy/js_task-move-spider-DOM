'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();
  let targetX = e.clientX - wallRect.left - spiderRect.width / 2;
  let targetY = e.clientY - wallRect.top - spiderRect.height / 2;

  targetY = Math.max(0, Math.min(targetY, wallRect.height - spiderRect.height));

  targetX = Math.max(0, Math.min(targetX, wallRect.width - spiderRect.width));

  spider.style.top = `${targetY}px`;
  spider.style.left = `${targetX}px`;
});
