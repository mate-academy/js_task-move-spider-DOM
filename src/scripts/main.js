'use strict';

document.addEventListener('click', (e) => {
  const cursorPositionX = e.clientX;
  const cursorPositionY = e.clientY;
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!spider || !wall) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;
  let leftPos = cursorPositionX - wallRect.left - spiderWidth / 2;
  let topPos = cursorPositionY - wallRect.top - spiderHeight / 2;
  const minLeft = 0;
  const maxLeft = wallRect.width - spiderWidth;
  const minTop = 0;
  const maxTop = wallRect.height - spiderHeight;

  leftPos = Math.round(Math.min(Math.max(leftPos, minLeft), maxLeft));
  topPos = Math.round(Math.min(Math.max(topPos, minTop), maxTop));
  spider.style.left = `${leftPos}px`;
  spider.style.top = `${topPos}px`;
});
