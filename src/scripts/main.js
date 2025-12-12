'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const spiderRect = spider.getBoundingClientRect();

  const relativeX = e.clientX - wallRect.left - wall.clientLeft;
  const relativeY = e.clientY - wallRect.top - wall.clientTop;

  const desiredLeft = relativeX - spiderRect.width / 2;
  const desiredTop = relativeY - spiderRect.height / 2;

  const maxLeft = wall.clientWidth - spiderRect.width;
  const maxTop = wall.clientHeight - spiderRect.height;

  const newLeft = Math.max(0, Math.min(desiredLeft, maxLeft));
  const newTop = Math.max(0, Math.min(desiredTop, maxTop));

  spider.style.left = newLeft + 'px';
  spider.style.top = newTop + 'px';
});
