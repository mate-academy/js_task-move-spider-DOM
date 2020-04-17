'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = wall.querySelector('.spider');

  const wallPosition = wall.getBoundingClientRect();

  const wallX = wallPosition.left + wall.clientLeft;
  const wallY = wallPosition.top + wall.clientTop;

  let y = e.clientY - wallY - spider.offsetHeight / 2;
  let x = e.clientX - wallX - spider.offsetWidth / 2;

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

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
