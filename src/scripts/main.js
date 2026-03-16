'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  moveSpider(e.clientX, e.clientY);
});

function moveSpider(x, y) {
  const wallRect = wall.getBoundingClientRect();
  const wallStyles = getComputedStyle(wall);

  const borderLeft = parseFloat(wallStyles.borderLeftWidth) || 0;
  const borderTop = parseFloat(wallStyles.borderTopWidth) || 0;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const targetLeft = x - wallRect.left - borderLeft - spiderWidth / 2;
  const targetTop = y - wallRect.top - borderTop - spiderHeight / 2;

  const maxLeft = wall.clientWidth - spiderWidth;
  const maxTop = wall.clientHeight - spiderHeight;

  const finalLeft = Math.max(0, Math.min(targetLeft, maxLeft));
  const finalTop = Math.max(0, Math.min(targetTop, maxTop));

  spider.style.left = `${finalLeft}px`;
  spider.style.top = `${finalTop}px`;
}
