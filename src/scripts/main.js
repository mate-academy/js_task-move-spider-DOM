'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const reachableHeight = wall.clientHeight - spiderHeight;
const reachableWidth = wall.clientWidth - spiderWidth;

document.addEventListener('click', e => {
  if (e.target === spider || e.target !== wall) {
    return;
  }

  let locationX = e.offsetX - (spiderWidth / 2);
  let locationY = e.offsetY - (spiderHeight / 2);

  if (locationX < 0) {
    locationX = 0;
  }

  if (locationY < 0) {
    locationY = 0;
  }

  if (locationX > reachableWidth) {
    locationX = reachableWidth;
  }

  if (locationY > reachableHeight) {
    locationY = reachableHeight;
  }

  spider.style.top = locationY + 'px';
  spider.style.left = locationX + 'px';
});
