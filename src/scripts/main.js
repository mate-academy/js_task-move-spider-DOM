'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;

  const wallBorderLeft = wall.clientLeft;
  const wallBorderTop = wall.clientTop;

  let centerX = e.clientX - wallRect.left - wallBorderLeft;
  let centerY = e.clientY - wallRect.top - wallBorderTop;

  centerX = Math.max(
    spiderHalfWidth,
    Math.min(centerX, wall.clientWidth - spiderHalfWidth),
  );

  centerY = Math.max(
    spiderHalfHeight,
    Math.min(centerY, wall.clientHeight - spiderHalfHeight),
  );

  spider.style.left = `${centerX - spiderHalfWidth}px`;
  spider.style.top = `${centerY - spiderHalfHeight}px`;
});
