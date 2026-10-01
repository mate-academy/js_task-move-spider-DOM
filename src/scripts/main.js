'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderHalfSize = spider.clientWidth / 2;

  const borderLeft = wall.clientLeft;
  const borderTop = wall.clientTop;

  if (
    e.clientX < wallRect.left ||
    e.clientY < wallRect.top ||
    e.clientX > wallRect.right ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  let moveTop = e.clientY - wallRect.top - spiderHalfSize - borderTop;
  let moveLeft = e.clientX - wallRect.left - spiderHalfSize - borderLeft;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  moveLeft = Math.max(0, Math.min(maxLeft, moveLeft));
  moveTop = Math.max(0, Math.min(maxTop, moveTop));

  spider.style.top = Math.round(moveTop) + 'px';
  spider.style.left = Math.round(moveLeft) + 'px';
});
