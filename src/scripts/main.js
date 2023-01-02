'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

wall.addEventListener('click', e => {
  let moveToX = e.offsetX - spiderWidth / 2;
  let moveToY = e.offsetY - spiderHeight / 2;

  if (moveToX < (spiderWidth / 2)) {
    moveToX = 0;
  } else if (moveToX > (wallWidth - spiderWidth)) {
    moveToX = wallWidth - spiderWidth;
  }

  if (moveToY < (spiderHeight / 2)) {
    moveToY = 0;
  } else if (moveToY > (wallHeight - spiderHeight)) {
    moveToY = wallHeight - spiderHeight;
  }

  spider.style.left = moveToX + 'px';
  spider.style.top = moveToY + 'px';
});
