'use strict';

const wall = document.querySelector('.wall');
const borderLeft = wall.clientLeft;
const borderTop = wall.clientTop;

const spider = document.querySelector('.spider');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;
const spiderCenterX = spider.clientWidth / 2;
const spiderCenterY = spider.clientHeight / 2;

wall.addEventListener('click', (e) => {
  const wallSize = wall.getBoundingClientRect();
  const maxLeft = wallSize.width - borderLeft * 2 - spiderWidth;
  const maxTop = wallSize.height - borderTop * 2 - spiderHeight;

  const clickX = e.clientX - wallSize.left - borderLeft;
  const clickY = e.clientY - wallSize.top - borderTop;

  spider.style.left =
    Math.max(0, Math.min(clickX - spiderCenterX, maxLeft)) + 'px';

  spider.style.top =
    Math.max(0, Math.min(clickY - spiderCenterY, maxTop)) + 'px';
});
