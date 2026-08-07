'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();

  const x = e.clientX - rect.left - wall.clientLeft;
  const y = e.clientY - rect.top - wall.clientTop;

  let left = x - spider.offsetWidth / 2;
  let topp = y - spider.offsetHeight / 2;

  if (left < 0) {
    left = 0;
  }

  if (topp < 0) {
    topp = 0;
  }

  if (left > wall.clientWidth - spider.offsetWidth) {
    left = wall.clientWidth - spider.offsetWidth;
  }

  if (topp > wall.clientHeight - spider.offsetHeight) {
    topp = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = left + 'px';
  spider.style.top = topp + 'px';
});