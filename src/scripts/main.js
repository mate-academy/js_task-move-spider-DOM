'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const wallBorderWidth = parseInt(getComputedStyle(wall).borderWidth);

  const clickX = e.clientX;
  const clickY = e.clientY;

  if (!e.target.closest('.wall')) {
    return;
  }

  const maxWidth = wall.clientWidth - spider.clientWidth;
  const maxHeight = wall.clientHeight - spider.clientHeight;

  const x = clickX - wallRect.left - wallBorderWidth;
  const y = clickY - wallRect.top - wallBorderWidth;

  const newLeft = Math.min(
    Math.max(0, x - spider.clientWidth / 2), maxWidth);
  const newTop = Math.min(
    Math.max(0, y - spider.clientHeight / 2), maxHeight);

  spider.style.left = newLeft + 'px';
  spider.style.top = newTop + 'px';
});
