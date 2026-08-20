'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const isOnWall =
    e.clientX >= wallRect.left &&
    e.clientX <= wallRect.right &&
    e.clientY >= wallRect.top &&
    e.clientY <= wallRect.bottom;

  if (!isOnWall) {
    return;
  }

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  const nextLeft =
    e.clientX - wallRect.left - wall.clientLeft - spider.offsetWidth / 2;
  const nextTop =
    e.clientY - wallRect.top - wall.clientTop - spider.offsetHeight / 2;

  spider.style.left = `${Math.min(Math.max(nextLeft, 0), maxLeft)}px`;
  spider.style.top = `${Math.min(Math.max(nextTop, 0), maxTop)}px`;
});
