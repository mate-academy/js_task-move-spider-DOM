'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let x = e.clientX - wallRect.left - wall.clientLeft - spiderWidth / 2;
  let y = e.clientY - wallRect.top - wall.clientTop - spiderHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  const maxX = wallWidth - spiderWidth;
  const maxY = wallHeight - spiderHeight;

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
