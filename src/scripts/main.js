'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target.closest('.wall')) {
    const spiderWidth = spider.clientWidth;
    const spiderHeight = spider.clientHeight;
    const wallRect = wall.getBoundingClientRect();
    const wallLeft = wallRect.left + wall.clientLeft;
    const wallTop = wallRect.top + wall.clientTop;

    const spiderLeft = e.clientX - wallLeft - spiderWidth / 2;
    const maxLeft = wall.clientWidth - spiderWidth;
    const spiderTop = e.clientY - wallTop - spiderHeight / 2;
    const maxTop = wall.clientHeight - spiderHeight;

    spider.style.left = `${Math.min(Math.max(spiderLeft, 0), maxLeft)}px`;
    spider.style.top = `${Math.min(Math.max(spiderTop, 0), maxTop)}px`;
  }
});
