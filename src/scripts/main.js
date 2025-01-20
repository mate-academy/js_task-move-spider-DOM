'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

wall.addEventListener('click', (e) => {
  let x = e.offsetX - spiderWidth / 2;
  let y = e.offsetY - spiderHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (x + spiderWidth / 2 > wallWidth) {
    x = wallWidth - spiderWidth;
  }

  if (y < 0) {
    y = 0;
  }

  if (y + spiderHeight / 2 > wallHeight) {
    y = wallHeight - spiderHeight;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
