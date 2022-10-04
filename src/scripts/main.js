'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const fieldCoords = wall.getBoundingClientRect();

  let left = e.clientX - fieldCoords.left
  - wall.clientLeft - spider.offsetWidth / 2;
  let up = e.clientY - fieldCoords.top
  - wall.clientTop - spider.offsetHeight / 2;

  if (left < 0) {
    left = 0;
  }

  if (up < 0) {
    up = 0;
  }

  if (left + spider.offsetWidth > wall.clientWidth) {
    left = wall.clientWidth - spider.offsetWidth;
  }

  if (up + spider.offsetHeight > wall.clientHeight) {
    up = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = left + 'px';
  spider.style.top = up + 'px';
});
