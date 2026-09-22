'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();
  const xInside = e.clientX - rect.left - wall.clientLeft;
  const yInside = e.clientY - rect.top - wall.clientTop;

  if (
    xInside < 0 ||
    yInside < 0 ||
    xInside > wall.clientWidth ||
    yInside > wall.clientHeight
  ) {
    return;
  }

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const targetLeft = Math.max(
    0,
    Math.min(xInside - spiderWidth / 2, wall.clientWidth - spiderWidth),
  );
  const targetTop = Math.max(
    0,
    Math.min(yInside - spiderHeight / 2, wall.clientHeight - spiderHeight),
  );

  spider.style.left = targetLeft + 'px';
  spider.style.top = targetTop + 'px';
});
