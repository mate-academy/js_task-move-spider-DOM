'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX;
  const clickY = e.clientY;

  const spiderX = clickX - wallRect.left - spiderRect.width / 2;
  const spiderY = clickY - wallRect.top - spiderRect.height / 2;

  if (
    spiderX >= 0
    && spiderY >= 0
    && spiderX + spiderRect.width <= wallRect.width
    && spiderY + spiderRect.height <= wallRect.height
  ) {
    spider.style.left = `${spiderX}px`;
    spider.style.top = `${spiderY}px`;
  }
});
