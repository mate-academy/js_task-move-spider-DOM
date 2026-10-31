'use strict';

document.querySelector('.wall').addEventListener('click', (e) => {
  const wall = e.currentTarget;
  const spider = wall.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  const x = e.clientX - wallRect.left - wall.clientLeft;
  const y = e.clientY - wallRect.top - wall.clientTop;

  let left = x - spider.offsetWidth / 2;
  let topOffset = y - spider.offsetHeight / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  left = Math.min(Math.max(left, 0), maxLeft);
  topOffset = Math.min(Math.max(topOffset, 0), maxTop);

  spider.style.left = `${left}px`;
  spider.style.top = `${topOffset}px`;
});
