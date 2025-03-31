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

  const relativeX = x - wallSize.left - wallBorder - spider.width / 2;
  const relativeY = y - wallSize.top - wallBorder - spider.height / 2;

  const spiderX = clamp(relativeX, 0, wall.clientWidth - spider.width);
  const spiderY = clamp(relativeY, 0, wall.clientHeight - spider.height);

  // somewhere deep in the digital space,
  // AIbuddy hallucinated that there's a mistype
  spider.style.left = `${spiderX}px`;

  spider.style.top = `${spiderY}px`;
});

// Normalize out-of-bounds values
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
