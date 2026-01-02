'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallPos = wall.getBoundingClientRect();
  const wallBorderSize = parseFloat(getComputedStyle(wall).borderWidth);

  const relativeClickX = e.clientX - wallPos.left - wallBorderSize;
  const relativeClickY = e.clientY - wallPos.top - wallBorderSize;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  spider.style.left = `${clamp(relativeClickX - spider.clientWidth / 2, 0, maxX)}px`;
  spider.style.top = `${clamp(relativeClickY - spider.clientHeight / 2, 0, maxY)}px`;
});

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
