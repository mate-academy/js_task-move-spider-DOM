'use strict';

const wall = document.body.querySelector('.wall');
const spider = document.body.querySelector('.spider');
let maxX = 0;
let maxY = 0;

document.addEventListener('click', initial);
spider.addEventListener('load', loadComplete);

function loadComplete() {
  maxX = wall.clientWidth - spider.offsetWidth;
  maxY = wall.clientHeight - spider.offsetHeight;
}

function initial() {
  const wallPosition = wall.getBoundingClientRect();

  const wallX = wallPosition.left + wall.clientLeft;
  const wallY = wallPosition.top + wall.clientTop;

  let x = event.clientX - wallX - spider.offsetWidth / 2;
  let y = event.clientY - wallY - spider.offsetHeight / 2;

  if (x < 0) {
    x = 0;
  };

  if (x > maxX) {
    x = maxX;
  };

  if (y < 0) {
    y = 0;
  };

  if (y > maxY) {
    y = maxY;
  };

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
}
