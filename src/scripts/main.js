'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let targetLeft = clickX - spiderWidth / 2;
  let targetTop = clickY - spiderHeight / 2;

  targetLeft = Math.max(0, targetLeft);
  targetTop = Math.max(0, targetTop);

  targetLeft = Math.min(wallRect.width - spiderWidth, targetLeft);
  targetTop = Math.min(wallRect.height - spiderHeight, targetTop);

  spider.style.left = targetLeft + 'px';
  spider.style.top = targetTop + 'px';
});
