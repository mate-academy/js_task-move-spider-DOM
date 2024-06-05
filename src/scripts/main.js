'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target.className !== 'wall') {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const wallBorder = parseInt(window.getComputedStyle(wall).borderTopWidth);

  const wallEdgeBottom = wallRect.bottom - wallRect.top - wallBorder * 2;
  const wallEdgeRight = wallRect.right - wallRect.left - wallBorder * 2;

  let height = e.clientY - spider.clientHeight / 2 - wallRect.top - wallBorder;
  let left = e.clientX - spider.clientWidth / 2 - wallRect.left - wallBorder;

  height = Math.min(Math.max(0, height), wallEdgeBottom - spider.clientHeight);
  left = Math.min(Math.max(0, left), wallEdgeRight - spider.clientWidth);

  spider.style.top = `${height}px`;
  spider.style.left = `${left}px`;
});
