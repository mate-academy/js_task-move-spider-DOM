'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = wall.querySelector('.spider');

  if (!spider) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  // cursor position
  const clickXInWall = e.clientX - wallRect.left - wall.clientLeft;
  const clickYInWall = e.clientY - wallRect.top - wall.clientTop;

  // spider center
  let targetLeft = clickXInWall - spider.offsetWidth / 2;
  let targetTop = clickYInWall - spider.offsetHeight / 2;

  // spider max shift
  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  // spider move clamping [0, max]
  targetLeft = Math.max(0, Math.min(targetLeft, maxLeft));
  targetTop = Math.max(0, Math.min(targetTop, maxTop));

  spider.style.left = `${targetLeft}px`;
  spider.style.top = `${targetTop}px`;
});
