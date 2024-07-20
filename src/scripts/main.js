'use strict';

const wall = document.querySelector('.wall');
const wallRect = wall.getBoundingClientRect();
const wallBorderSize = Number.parseFloat(getComputedStyle(wall).borderWidth);
const spider = document.querySelector('.spider');

const defaultOffsetX = wallRect.left + wallBorderSize + spider.width / 2;
const defaultOffsetY = wallRect.top + wallBorderSize + spider.height / 2;
const maxX = wall.clientWidth - spider.clientWidth;
const maxY = wall.clientHeight - spider.clientHeight;

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  let x = e.clientX - defaultOffsetX;
  let y = e.clientY - defaultOffsetY;

  if (x < 0) {
    x = 0;
  } else if (x > maxX) {
    x = maxX;
  }

  if (y < 0) {
    y = 0;
  } else if (y > maxY) {
    y = maxY;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
