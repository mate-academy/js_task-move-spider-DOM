'use strict';

const spider = document.getElementsByClassName('spider')[0];
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const area = e.target.closest('div');

  if (!area) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let targetX = e.clientX - wallRect.left - spiderRect.width / 2;
  let targetY = e.clientY - wallRect.top - spiderRect.height / 2;

  targetX = Math.max(0, Math.min(targetX, wallRect.width - spiderRect.width));
  targetY = Math.max(0, Math.min(targetY, wallRect.height - spiderRect.height));

  spider.style.left = `${targetX}px`;
  spider.style.top = `${targetY}px`;
});
