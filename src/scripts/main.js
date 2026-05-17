'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const style = getComputedStyle(wall);
  const borderLeft = parseFloat(style.borderLeftWidth);
  const borderTop = parseFloat(style.borderTopWidth);

  const clickX = e.clientX - wallRect.left - borderLeft;
  const clickY = e.clientY - wallRect.top - borderTop;

  const maxLeft = wall.clientWidth - spiderWidth;
  const maxTop = wall.clientHeight - spiderHeight;

  const left = Math.min(Math.max(clickX - spiderWidth / 2, 0), maxLeft);
  const spiderTop = Math.min(Math.max(clickY - spiderHeight / 2, 0), maxTop);

  spider.style.left = left + 'px';
  spider.style.top = spiderTop + 'px';
});
