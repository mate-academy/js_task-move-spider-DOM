'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const maxX = wall.clientWidth - spider.offsetWidth;
const maxY = wall.clientHeight - spider.offsetHeight;

wall.addEventListener('click', event => {
  const wallPosition = wall.getBoundingClientRect();
  const wallX = wallPosition.left + wall.clientLeft;
  const wallY = wallPosition.top + wall.clientTop;

  let x = event.clientX - wallX - spider.offsetWidth;
  let y = event.clientY - wallY - spider.offsetHeight;

  if (x < 0) {
    x = 0;
  }

  if (x > maxX) {
    x = wallX;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > maxY) {
    y = wallY;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
