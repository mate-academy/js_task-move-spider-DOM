'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();

  const contentX = e.clientX - wallRect.left - wall.clientLeft;
  const contentY = e.clientY - wallRect.top - wall.clientTop;

  let left = contentX - spider.offsetWidth / 2;
  let topPosition = contentY - spider.offsetHeight / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  left = Math.max(0, Math.min(left, maxLeft));
  topPosition = Math.max(0, Math.min(topPosition, maxTop));

  spider.style.left = `${left}px`;
  spider.style.top = `${topPosition}px`;
});
