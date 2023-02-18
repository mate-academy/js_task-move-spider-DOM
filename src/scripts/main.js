'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const wallLeft = wallRect.left;
  const wallTop = wallRect.top;
  const wallRight = wallRect.right;
  const wallBottom = wallRect.bottom;

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const newSpiderLeft = mouseX - spiderWidth / 2 - wallLeft;
  const newSpiderTop = mouseY - spiderHeight / 2 - wallTop;

  if (
    newSpiderLeft < 0
    || newSpiderTop < 0
    || newSpiderLeft + spiderWidth > wallRight - wallLeft
    || newSpiderTop + spiderHeight > wallBottom - wallTop
  ) {
    return;
  }

  spider.style.left = newSpiderLeft + 'px';
  spider.style.top = newSpiderTop + 'px';
});
