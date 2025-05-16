'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  const [x, y] = [e.clientX, e.clientY];

  const wallSize = wall.getBoundingClientRect();
  const wallBorder = parseInt(window.getComputedStyle(wall).borderWidth, 10);

  const relativeX = x - wallSize.left - wallBorder - spider.offsetWidth / 2;
  const relativeY = y - wallSize.top - wallBorder - spider.offsetHeight / 2;

  const spiderX = clamp(relativeX, 0, wall.clientWidth - spider.offsetWidth);
  const spiderY = clamp(relativeY, 0, wall.clientHeight - spider.offsetHeight);

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
