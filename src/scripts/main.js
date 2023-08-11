'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const wallRect = wall.getBoundingClientRect();

  if (e.target !== wall) {
    return;
  }

  const spiderTop
    = e.clientY - wallRect.top - wall.clientTop - (spider.offsetHeight / 2);

  const spiderLeft
    = e.clientX - wallRect.left - wall.clientLeft - (spider.offsetWidth / 2);

  const maxSpiderTop = wall.clientHeight - spider.offsetHeight;
  const maxSpiderLeft = wall.clientWidth - spider.offsetWidth;

  const clampedSpiderTop = Math.max(0, Math.min(maxSpiderTop, spiderTop));
  const clampedSpiderLeft = Math.max(0, Math.min(maxSpiderLeft, spiderLeft));

  spider.style.top = clampedSpiderTop + 'px';
  spider.style.left = clampedSpiderLeft + 'px';
});
