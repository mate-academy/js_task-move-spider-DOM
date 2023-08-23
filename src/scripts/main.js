'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const wallRect = wall.getBoundingClientRect();

  if (e.target !== wall) {
    return;
  }

  const spiderY
  = e.clientY - wallRect.top - wall.clientTop - (spider.offsetHeight / 2);

  const spiderX
  = e.clientX - wallRect.left - wall.clientLeft - (spider.offsetWidth / 2);

  const maxSpiderY = wall.clientHeight - spider.offsetHeight;
  const maxSpiderX = wall.clientWidth - spider.offsetWidth;

  const clampedSpiderY = Math.max(0, Math.min(maxSpiderY, spiderY));
  const clampedSpiderX = Math.max(0, Math.min(maxSpiderX, spiderX));

  spider.style.top = clampedSpiderY + 'px';
  spider.style.left = clampedSpiderX + 'px';
});
