'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const leftPosition =
    e.clientX - wallRect.left - wall.clientLeft - spider.offsetWidth / 2;
  const topPosition =
    e.clientY - wallRect.top - wall.clientTop - spider.offsetHeight / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  spider.style.left = `${Math.min(Math.max(leftPosition, 0), maxLeft)}px`;
  spider.style.top = `${Math.min(Math.max(topPosition, 0), maxTop)}px`;
});
