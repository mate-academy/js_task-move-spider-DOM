'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const wallPosition = wall.getBoundingClientRect();
  const wallX = wallPosition.x + wall.clientLeft;
  const wallY = wallPosition.y + wall.clientTop;

  let x = event.clientX - wallX - spider.offsetWidth / 2;
  let y = event.clientY - wallY - spider.offsetHeight / 2;

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

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

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
