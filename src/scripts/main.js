'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  let x = e.offsetX - spider.offsetWidth / 2;
  let y = e.offsetY - spider.offsetWidth / 2;

  if (x < 0) {
    x = 0;
  }

  if (x > wall.clientWidth - spider.offsetWidth) {
    x = wall.clientWidth - spider.offsetWidth;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > wall.clientHeight - spider.offsetHeight) {
    y = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
