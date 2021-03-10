'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const allowedWidth = wallWidth - spiderWidth;
const allowedHeight = wallHeight - spiderHeight;

wall.addEventListener('click', e => {
  const clickedWidth = e.offsetX;
  const clickedHeight = e.offsetY;

  if (wall !== e.target || spider === e.target) {
    return;
  }

  if (clickedWidth > allowedWidth) {
    spider.style.left = allowedWidth + 'px';
  } else {
    spider.style.left = (clickedWidth - spiderWidth / 2) + 'px';
  }

  if (clickedHeight > allowedHeight) {
    spider.style.top = allowedHeight + 'px';
  } else {
    spider.style.top = (clickedHeight - spiderHeight / 2) + 'px';
  }

  if (clickedHeight <= spiderHeight) {
    spider.style.top = 0;
  }

  if (clickedWidth <= spiderWidth) {
    spider.style.left = 0;
  }
});
