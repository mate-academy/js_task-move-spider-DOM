'use strict';

const wall = document.querySelector('.wall');
const wallRect = wall.getBoundingClientRect();
const wallBorderSize = Number.parseFloat(getComputedStyle(wall).borderWidth);
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  let x = e.clientX - wallRect.left - wallBorderSize - spider.width / 2;
  let y = e.clientY - wallRect.top - wallBorderSize - spider.height / 2;

  if (x < 0) {
    x = 0;
  } else if (x > wall.clientWidth - spider.clientWidth) {
    x = wall.clientWidth - spider.clientWidth;
  }

  if (y < 0) {
    y = 0;
  } else if (y > wall.clientHeight - spider.clientHeight) {
    y = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
