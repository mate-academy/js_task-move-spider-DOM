'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderMinX = 0;
const spiderMinY = 0;

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const wallX = e.clientX - wallRect.left - wall.clientLeft;
  const wallY = e.clientY - wallRect.top - wall.clientTop;

  if (
    e.clientX < wallRect.left ||
    e.clientY < wallRect.top ||
    e.clientX > wallRect.right ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const spiderX = wallX - spider.offsetWidth / 2;
  const spiderY = wallY - spider.offsetHeight / 2;

  const spiderMaxX = Math.max(0, wall.clientWidth - spider.offsetWidth);
  const spiderMaxY = Math.max(0, wall.clientHeight - spider.offsetHeight);

  const clampedSpiderX = clamp(spiderX, spiderMinX, spiderMaxX);
  const clampedSpiderY = clamp(spiderY, spiderMinY, spiderMaxY);

  spider.style.left = `${clampedSpiderX}px`;
  spider.style.top = `${clampedSpiderY}px`;
});

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
