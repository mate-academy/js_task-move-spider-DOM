'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderRect = spider.getBoundingClientRect();
const spiderWidth = spiderRect.width;
const spiderHeight = spiderRect.height;

wall.addEventListener('click', e => {
  if (e.target === wall) {
    const wallRect = wall.getBoundingClientRect();
    const clickX = e.clientX - wallRect.left;
    const clickY = e.clientY - wallRect.top;

    const spiderCenterX = clickX - spiderWidth + 15;
    const spiderCenterY = clickY - spiderHeight + 10;

    const maxX = wallRect.width - (spiderWidth * 1.4);
    const maxY = wallRect.height - (spiderHeight * 1.4);
    const newX = Math.min(Math.max(spiderCenterX, 0), maxX);
    const newY = Math.min(Math.max(spiderCenterY, 0), maxY);

    spider.style.left = newX + 'px';
    spider.style.top = newY + 'px';
  }
});
