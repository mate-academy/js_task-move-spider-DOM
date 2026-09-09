'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (getComputedStyle(wall).position === 'static') {
  wall.style.position = 'relative';
}

wall.addEventListener('click', (e) => {
  // write code here
  const rect = wall.getBoundingClientRect();
  const clickX = e.clientX - rect.left - wall.clientLeft;
  const clickY = e.clientY - rect.top - wall.clientTop;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const wallContentWidth = wall.clientWidth;
  const wallContentHeight = wall.clientHeight;

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
