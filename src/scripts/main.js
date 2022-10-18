'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.clientWidth;
const spiderНeight = spider.clientHeight;
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

document.addEventListener('click', e => {
  let spiderX = e.offsetX - spiderWidth / 2;
  let spiderY = e.offsetY - spiderНeight / 2;

  if (e.target !== wall) {
    return;
  }

  if (spiderY > wallHeight - spiderНeight) {
    spiderY = wallHeight - spiderНeight;
  }

  if (spiderX > wallWidth - spiderWidth) {
    spiderX = wallWidth - spiderWidth;
  }

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});
