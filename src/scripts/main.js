'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  let x = e.clientX - wall.getBoundingClientRect().left
    - wall.clientLeft - spider.clientWidth / 2;
  let y = e.clientY - wall.getBoundingClientRect().top
    - wall.clientTop - spider.clientHeight / 2;

  if (y < 0) {
    y = 0;
  }

  if (x < 0) {
    x = 0;
  }

  if (x + spider.clientWidth > wall.clientWidth) {
    x = wall.clientWidth - spider.clientWidth;
  }

  if (y + spider.clientHeight > wall.clientHeight) {
    y = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
