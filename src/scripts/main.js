'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const spiderY = e.clientY - wallRect.top - wall.clientTop
  - (spiderRect.height / 2);
  const spiderX = e.clientX - wallRect.left - wall.clientLeft
  - (spiderRect.width / 2);

  const maxSpiderY = wall.clientHeight - spiderRect.height;
  const maxSpiderX = wall.clientWidth - spiderRect.width;

  const clampedSpiderY = Math.max(0, Math.min(maxSpiderY, spiderY));
  const clampedSpiderX = Math.max(0, Math.min(maxSpiderX, spiderX));

  spider.style.top = clampedSpiderY + 'px';
  spider.style.left = clampedSpiderX + 'px';
});
