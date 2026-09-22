'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

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

  spider.style.left = xInside - spiderWidth / 2 + 'px';
  spider.style.top = yInside - spiderHeight / 2 + 'px';
});
