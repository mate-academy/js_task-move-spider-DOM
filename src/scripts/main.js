'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallCoords = wall.getBoundingClientRect();
const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const spiderHeight = spider.clientHeight;
const spiderCenter = spiderHeight / 2;

document.addEventListener('click', e => {
  let y = e.clientY - wallCoords.top - wall.clientTop - spiderCenter;
  let x = e.clientX - wallCoords.left - wall.clientLeft - spiderCenter;

  if (y < 0) {
    y = 0;
  }

  if (y > wallHeight) {
    y = wallHeight - spiderHeight;
  }

  if (x < 0) {
    x = 0;
  }

  if (x > wallWidth) {
    x = wallWidth - spiderHeight;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
