'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const leftCoord = wall.offsetLeft + wall.clientLeft;
  const topCoord = wall.offsetTop + wall.clientTop;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let moveX = e.clientX - leftCoord - (spiderWidth / 2);
  let moveY = e.clientY - topCoord - (spiderHeight / 2);

  if (e.clientX - leftCoord < (spiderWidth / 2)) {
    moveX = 0;
  }

  if (e.clientY - topCoord < (spiderHeight / 2)) {
    moveY = 0;
  }

  if (e.clientX - leftCoord > wallWidth - (spiderWidth / 2)) {
    moveX = wallWidth - spiderWidth;
  }

  if (e.clientY - topCoord > wallHeight - (spiderHeight / 2)) {
    moveY = wallHeight - spiderHeight;
  }

  spider.style.left = moveX + 'px';
  spider.style.top = moveY + 'px';
});
