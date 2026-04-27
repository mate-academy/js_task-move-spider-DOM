'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const clickX = e.clientX;
  const clickY = e.clientY;

  const wallRect = wall.getBoundingClientRect();

  let x = clickX - wallRect.left - wall.clientLeft;
  let y = clickY - wallRect.top - wall.clientTop;

  x -= spider.clientWidth / 2;
  y -= spider.clientHeight / 2;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
