'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const maxX = wall.clientWidth - spider.offsetWidth;
const maxY = wall.clientHeight - spider.offsetHeight;

wall.addEventListener('click', event => {
  const wallPosition = wall.getBoundingClientRect();
  const wallX = wallPosition.left + wall.clientLeft;
  const wallY = wallPosition.top + wall.clientTop;

  let x = event.clientX - wallX - (spider.offsetWidth / 2);
  let y = event.clientY - wallY - (spider.offsetHeight / 2);

  if (x < 0) {
    x = 0;
  } else if (x > maxX) {
    x = maxX;
  }

  if (y < 0) {
    y = 0;
  } else if (y > maxY) {
    y = maxY;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
