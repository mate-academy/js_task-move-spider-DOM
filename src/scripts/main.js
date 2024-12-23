'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const rect = wall.getBoundingClientRect();

document.addEventListener('click', (e) => {
  const wallBorderW = (rect.width - wall.clientWidth) / 2;

  let y = e.clientY - rect.top - wallBorderW - spider.clientHeight / 2;
  let x = e.clientX - rect.left - wallBorderW - spider.clientWidth / 2;

  const minX = 0;
  const minY = 0;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  const wallLeftStart = rect.left;
  const wallRightEnd = rect.left + rect.width;

  const wallTopStart = rect.top;
  const wallBottomEnd = rect.top + rect.height;

  if (y < minY) {
    y = minY;
  }

  if (y > maxY) {
    y = maxY;
  }

  if (x < minX) {
    x = minX;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (e.clientX < wallLeftStart || e.clientX > wallRightEnd) {
    return;
  }

  if (e.clientY < wallTopStart || e.clientY > wallBottomEnd) {
    return;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
