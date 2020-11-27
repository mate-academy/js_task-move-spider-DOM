'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallPosition = wall.getBoundingClientRect();
const wallX = wallPosition.x + wall.clientLeft;
const wallY = wallPosition.y + wall.clientTop;

const maxX = wall.clientWidth - spider.offsetWidth;
const maxY = wall.clientHeight - spider.offsetHeight;

wall.addEventListener('click', e => {
  let x = e.clientX - wallX - spider.offsetWidth / 2;
  let y = e.clientY - wallY - spider.offsetHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
