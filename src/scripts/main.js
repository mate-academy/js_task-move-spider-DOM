'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  let left = x;
  let topp = y;

  if (left < 0) {
    left = 0;
  }

  if (topp < 0) {
    topp = 0;
  }

  if (left > wall.offsetWidth - spider.offsetWidth) {
    left = wall.offsetWidth - spider.offsetWidth;
  }

  if (topp > wall.offsetHeight - spider.offsetHeight) {
    topp = wall.offsetHeight - spider.offsetHeight;
  }

  spider.style.left = left + 'px';
  spider.style.top = topp + 'px';
});
