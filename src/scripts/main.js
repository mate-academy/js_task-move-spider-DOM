'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const borderTop = parseInt(getComputedStyle(wall).borderTopWidth, 10);
  const borderLeft = parseInt(getComputedStyle(wall).borderLeftWidth, 10);

  const clickX = e.clientX - wallRect.left - borderLeft;
  const clickY = e.clientY - wallRect.top - borderTop;

  let left = clickX - spiderWidth / 2;
  let t = clickY - spiderHeight / 2;

  if (left < 0) {
    left = 0;
  }

  if (t < 0) {
    t = 0;
  }

  if (left > wall.clientWidth - spiderWidth) {
    left = wall.clientWidth - spiderWidth;
  }

  if (t > wall.clientHeight - spiderHeight) {
    t = wall.clientHeight - spiderHeight;
  }

  spider.style.left = left + 'px';
  spider.style.top = t + 'px';
});
