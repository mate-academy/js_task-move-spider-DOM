'use strict';

const wall = document.querySelector('.wall');
const wallRect = wall.getBoundingClientRect();

const spider = document.querySelector('.spider');
const spiderRect = spider.getBoundingClientRect();
const spiderSize = spiderRect.width;
const spiderHalf = spiderSize / 2;

document.addEventListener('click', e => {
  if (e.target === wall) {
    const compSize = window.getComputedStyle(wall);
    const borderSize = parseFloat(compSize.borderWidth);

    const clickX = e.clientX - wallRect.left + wall.scrollLeft;
    const clickY = e.clientY - wallRect.top + wall.scrollTop;

    const newSpiderX = Math.max(clickX - spiderHalf - borderSize, 0);
    const newSpiderY = Math.max(clickY - spiderHalf - borderSize, 0);
    const borderRestrict = wallRect.width - spiderSize - borderSize * 2;

    const clickSpiderX = Math.min(newSpiderX, borderRestrict);
    const clickSpiderY = Math.min(newSpiderY, borderRestrict);

    spider.style.left = clickSpiderX + 'px';
    spider.style.top = clickSpiderY + 'px';
  }
});
