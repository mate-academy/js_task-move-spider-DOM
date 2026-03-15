'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector(`.wall`);

wall.addEventListener('click', (e) => {
  const field = wall.getBoundingClientRect();

  let x = e.clientX - field.left - wall.clientLeft - spider.clientWidth / 2;
  let y = e.clientY - field.top - wall.clientTop - spider.clientHeight / 2;

  if (x < 0) {
    x = 0;
  }

  const maxX = wall.clientWidth - spider.clientWeight;

  if (x > maxX) {
    x = maxX;
  }

  if (y < 0) {
    y = 0;
  }

  const maxY = wall.clientHeight - spider.clientHeight;

  if (y > maxY) {
    y = maxY;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
