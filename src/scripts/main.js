'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallStyles = getComputedStyle(wall);
const wallBorderLeft = parseInt(wallStyles.borderLeftWidth);
const wallBorderTop = parseInt(wallStyles.borderTopWidth);

function limitCoords(coord, maxSize, elementSize) {
  return Math.max(0, Math.min(coord, maxSize - elementSize));
}

document.addEventListener('click', (e) => {
  const point = e.target.closest('.wall');

  if (!point) {
    return;
  }

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallRect = wall.getBoundingClientRect();
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const currentX = limitCoords(
    e.clientX - wallRect.left - spiderWidth / 2 - wallBorderLeft,
    wallWidth,
    spiderWidth,
  );
  const currentY = limitCoords(
    e.clientY - wallRect.top - spiderHeight / 2 - wallBorderTop,
    wallHeight,
    spiderHeight,
  );

  spider.style.top = currentY + 'px';
  spider.style.left = currentX + 'px';
});
