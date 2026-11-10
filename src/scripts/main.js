'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

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

  let leftPosition =
    e.clientX - wallRect.left - wall.clientLeft - spider.offsetWidth / 2;
  let topPosition =
    e.clientY - wallRect.top - wall.clientTop - spider.offsetHeight / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  leftPosition = clamp(leftPosition, 0, maxLeft);
  topPosition = clamp(topPosition, 0, maxTop);

  spider.style.left = `${leftPosition}px`;
  spider.style.top = `${topPosition}px`;
});
