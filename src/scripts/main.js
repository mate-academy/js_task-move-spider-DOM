'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const border = (wall.offsetHeight - wall.clientHeight) / 2;
  const spiderSize = spider.offsetHeight / 2;

  const minHorizontal = wallRect.left + border;
  const maxHorizontal = wallRect.right - border;
  const minVertical = wallRect.top + border;
  const maxVertical = wallRect.bottom - border;

  function clamp(value, min, max) {
    if (value < min || value > max) {
      return true;
    }
  }

  if (
    clamp(e.clientX, minHorizontal, maxHorizontal) ||
    clamp(e.clientY, minVertical, maxVertical)
  ) {
    return;
  }

  const verticalMove = e.clientY - wallRect.top - border - spiderSize;
  const horizontalMove = e.clientX - wallRect.left - border - spiderSize;

  const leftMove = Math.max(
    0,
    Math.min(horizontalMove, wall.clientWidth - spider.offsetWidth),
  );
  const topMove = Math.max(
    0,
    Math.min(verticalMove, wall.clientHeight - spider.offsetWidth),
  );

  spider.style.left = `${leftMove}px`;
  spider.style.top = `${topMove}px`;
});
