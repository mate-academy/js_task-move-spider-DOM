'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', event => {
  let x = event.offsetX - spider.offsetWidth / 2;
  let y = event.offsetY - spider.offsetHeight / 2;

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
