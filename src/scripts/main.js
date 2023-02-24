'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const maxX = wall.clientWidth - spider.clientWidth;
const maxY = wall.clientHeight - spider.clientHeight;

document.addEventListener('click', e => {

  let x = 
    e.clientX - wall.offsetLeft - wall.clientLeft - spider.clientWidth / 2;
  let y =
    e.clientY - wall.offsetTop - wall.clientTop - spider.clientHeight / 2;

  if (e.target === wall) {
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
  }
});
