'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  let x = e.clientX - wall.offsetLeft - wall.clientLeft
    - spider.offsetWidth / 2;
  let y = e.clientY - wall.offsetTop - wall.clientTop
    - spider.offsetHeight / 2;
  const limit = wall.clientWidth - spider.offsetWidth;

  if (x > limit) {
    x = limit;
  }

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > limit) {
    y = limit;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
