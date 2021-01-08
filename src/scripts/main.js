'use strict';

const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spider = wall.querySelector('.spider');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

wall.addEventListener('click', (e) => {
  const wallCords = wall.getBoundingClientRect();
  let topX = e.clientY - wallCords.top - wall.clientTop - (spiderWidth / 2);
  let leftY = e.clientX - wallCords.left - wall.clientLeft - (spiderHeight / 2);

  if (topX < 0) {
    topX = 0;
  }

  if (leftY < 0) {
    leftY = 0;
  }

  if (leftY + spiderWidth > wallWidth) {
    leftY = wallWidth - spiderWidth;
  }

  if (topX + spiderHeight > wallHeight) {
    topX = wallHeight - spiderWidth;
  }

  spider.style.left = leftY + 'px';
  spider.style.top = topX + 'px';
});
