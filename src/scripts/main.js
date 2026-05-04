'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  let left =
    e.clientX - wallRect.left - wall.clientLeft - spider.offsetWidth / 2;

  let topOffset =
    e.clientY - wallRect.top - wall.clientTop - spider.offsetHeight / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  left = Math.max(0, Math.min(left, maxLeft));
  topOffset = Math.max(0, Math.min(topOffset, maxTop));

  spider.style.left = `${left}px`;
  spider.style.top = `${topOffset}px`;
});
