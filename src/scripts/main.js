'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector('.spider');
  const viewportWallPos = wall.getBoundingClientRect();
  const viewportCursorPos = {
    x: e.clientX,
    y: e.clientY,
  };

  const totalXBorder = (wall.offsetWidth - wall.clientWidth) / 2;
  const totalYBorder = (wall.offsetHeight - wall.clientHeight) / 2;

  spider.style.left = `${clamp(
    viewportCursorPos.x -
      viewportWallPos.x -
      totalXBorder -
      spider.clientWidth / 2,
    0,
    wall.clientWidth - spider.clientWidth,
  )}px`;

  spider.style.top = `${clamp(
    viewportCursorPos.y -
      viewportWallPos.y -
      totalYBorder -
      spider.clientHeight / 2,
    0,
    wall.clientHeight - spider.clientHeight,
  )}px`;
});

function clamp(val, min, max) {
  return Math.max(Math.min(val, max), min);
}
