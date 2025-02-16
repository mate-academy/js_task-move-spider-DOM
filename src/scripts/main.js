'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!spider || !wall) {
    return;
  }

  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const clickX = e.clientX;
  const clickY = e.clientY;

  let newLeft = clickX - wallRect.left - spiderWidth / 2;
  let newTop = clickY - wallRect.top - spiderHeight / 2;

  newLeft = Math.max(0, Math.min(newLeft, wallRect.width - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wallRect.height - spiderHeight));

  spider.style.left = newLeft + 'px';
  spider.style.top = newTop + 'px';
});
