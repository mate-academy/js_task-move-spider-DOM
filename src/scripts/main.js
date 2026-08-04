'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (event) => {
  const rect = wall.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  let left = x - spider.offsetWidth / 2;
  let top = y - spider.offsetHeight / 2;

  if (left < 0) {
    left = 0;
  }

  if (top < 0) {
    top = 0;
  }

  if (left > wall.offsetWidth - spider.offsetWidth) {
    left = wall.offsetWidth - spider.offsetWidth;
  }

  if (top > wall.offsetHeight - spider.offsetHeight) {
    top = wall.offsetHeight - spider.offsetHeight;
  }

  spider.style.left = left + 'px';
  spider.style.top = top + 'px';
});
