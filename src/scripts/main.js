'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const clickTop = e.clientY - wallRect.top;
  const clickLeft = e.clientX - wallRect.left;

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const halfWidth = spiderWidth / 2;
  const halfHeight = spiderHeight / 2;

  const wallWidth = wallRect.width;
  const wallHeight = wallRect.height;

  let newTop = clickTop - halfHeight;
  let newLeft = clickLeft - halfWidth;

  const maxTop = Math.max(0, wallHeight - spiderHeight);
  const maxLeft = Math.max(0, wallWidth - spiderWidth);

  if (newTop < 0) {
    newTop = 0;
  }

  if (newTop > maxTop) {
    newTop = maxTop;
  }

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newLeft > maxLeft) {
    newLeft = maxLeft;
  }

  spider.style.top = newTop + 'px';
  spider.style.left = newLeft + 'px';
});
