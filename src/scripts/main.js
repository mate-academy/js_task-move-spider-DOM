'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  let x
    = e.clientX
    - wall.getBoundingClientRect().x
    - parseInt(getComputedStyle(wall).borderTopWidth)
    - (spider.clientWidth / 2);
  let y
    = e.clientY
    - wall.getBoundingClientRect().y
    - parseInt(getComputedStyle(wall).borderLeftWidth)
    - spider.clientHeight / 2;

  if (y + spider.clientHeight / 2 < 0) {
    y = 0;
  }

  if (y + spider.clientHeight > wall.clientHeight) {
    y = wall.clientHeight - spider.clientHeight;
  }

  if (x + spider.clientWidth / 2 < 0) {
    x = 0;
  }

  if (x + spider.clientWidth > wall.clientWidth) {
    x = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
