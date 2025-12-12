'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', function (e) {
  const wallRect = wall.getBoundingClientRect();
  const computedStyles = window.getComputedStyle(wall);
  const borderString = computedStyles.borderLeftWidth;
  const BORDER_WIDTH = parseFloat(borderString);
  const FULL_COMPENSATION = BORDER_WIDTH * 2;

  const desiredX = e.clientX - wallRect.left - BORDER_WIDTH;
  const desiredY = e.clientY - wallRect.top - BORDER_WIDTH;

  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const minX = spiderWidth / 2;
  const maxX = wallRect.width - FULL_COMPENSATION - spiderWidth / 2;

  const minY = spiderHeight / 2;
  const maxY = wallRect.height - FULL_COMPENSATION - spiderHeight / 2;

  const finalX = Math.max(minX, Math.min(maxX, desiredX));
  const finalY = Math.max(minY, Math.min(maxY, desiredY));

  const cssLeft = finalX - spiderWidth / 2;
  const cssTop = finalY - spiderHeight / 2;

  spider.style.position = 'absolute';
  spider.style.left = cssLeft + 'px';
  spider.style.top = cssTop + 'px';
});
