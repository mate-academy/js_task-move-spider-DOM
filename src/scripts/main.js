'use strict';

const wall = document.querySelector('.wall');
const wallRect = wall.getBoundingClientRect();
const wallBorderSize = Number.parseFloat(getComputedStyle(wall).borderWidth);
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  let x = e.clientX;
  let y = e.clientY;

  if (x < wallRect.left + wallBorderSize + spider.width / 2) {
    x = 0;
  } else if (x > wallRect.right - wallBorderSize - spider.width / 2) {
    x = wallRect.width - spider.width - wallBorderSize * 2;
  } else {
    x = e.clientX - wallRect.left - spider.width / 2 - wallBorderSize;
  }

  if (y < wallRect.top + wallBorderSize + spider.height / 2) {
    y = 0;
  } else if (y > wallRect.bottom - wallBorderSize - spider.height / 2) {
    y = wallRect.height - spider.height - wallBorderSize * 2;
  } else {
    y = e.clientY - wallRect.top - spider.height / 2 - wallBorderSize;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
