'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallНeight = wall.clientHeight;
const spiderWidth = spider.clientWidth;
const spiderНeight = spider.clientHeight;

wall.addEventListener('click', e => {
  let spiderX = e.offsetX - spiderWidth / 2;
  let spiderY = e.offsetY - spiderНeight / 2;

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (spiderX > wallWidth - spiderWidth) {
    spiderX = wallWidth - spiderWidth;
  }

  if (spiderY > wallНeight - spiderНeight) {
    spiderY = wallНeight - spiderНeight;
  }

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});
