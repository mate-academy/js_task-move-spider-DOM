'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (getComputedStyle(wall).position === 'static') {
  wall.style.position = 'relative';
}

wall.addEventListener('click', (e) => {
  // write code here
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();
  const wallStyles = getComputedStyle(wall);
  const borderLeft = parseFloat(wallStyles.borderLeftWidth) || 0;
  const borderTop = parseFloat(wallStyles.borderTopWidth) || 0;
  const wallContentLeft = wallRect.left + borderLeft;
  const wallContentTop = wallRect.top + borderTop;
  const wallContentWidth = wall.clientWidth;
  const wallContentHeight = wall.clientHeight;

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const clickX = e.clientX - wallContentLeft;
  const clickY = e.clientY - wallContentTop;

  let left = clickX - spiderWidth / 2;
  let topSpider = clickY - spiderHeight / 2;

  const maxLeft = wallContentWidth - spiderWidth;
  const maxTop = wallContentHeight - spiderHeight;

  left = Math.min(Math.max(left, 0), maxLeft);
  topSpider = Math.min(Math.max(topSpider, 0), maxTop);

  spider.style.position = 'absolute';
  spider.style.left = `${left}px`;
  spider.style.top = `${topSpider}px`;
});
