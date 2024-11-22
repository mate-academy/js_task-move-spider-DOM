'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let targetLeft = e.clientX - wallRect.left - spiderWidth / 2;
  let targetTop = e.clientY - wallRect.top - spiderHeight / 2;

  const wallInnerWidth = wallRect.width - 20;
  const wallInnerHeight = wallRect.height - 20;

  targetLeft = Math.max(0, Math.min(targetLeft, wallInnerWidth - spiderWidth));
  targetTop = Math.max(0, Math.min(targetTop, wallInnerHeight - spiderHeight));

  spider.style.left = `${targetLeft}px`;
  spider.style.top = `${targetTop}px`;
});
