'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!spider || !wall) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  let leftCoord =
    e.clientX - wallRect.left - wall.clientLeft - spider.offsetWidth / 2;
  let topCoord =
    e.clientY - wallRect.top - wall.clientTop - spider.offsetHeight / 2;

  const maxLeftCoord = wall.clientWidth - spider.offsetWidth;
  const maxTopCoord = wall.clientHeight - spider.offsetHeight;

  leftCoord = Math.max(0, Math.min(leftCoord, maxLeftCoord));
  topCoord = Math.max(0, Math.min(topCoord, maxTopCoord));

  spider.style.left = `${leftCoord}px`;
  spider.style.top = `${topCoord}px`;
});
