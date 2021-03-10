'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = parseInt(spider.clientWidth);
const spiderHeight = parseInt(spider.clientHeight);
const wallWidth = parseInt(wall.clientWidth);
const wallHeight = parseInt(wall.clientHeight);

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return 0;
  }

  const coordinateOfX = e.offsetX;
  const coordinateOfY = e.offsetY;

  if (coordinateOfX <= wallWidth - spiderWidth) {
    spider.style.left = coordinateOfX - spiderWidth / 2 + 'px';
  } else {
    spider.style.left = wallWidth - spiderWidth + 'px';
  }

  if (coordinateOfX <= spiderWidth / 2) {
    spider.style.left = 0 + 'px';
  }

  if (coordinateOfY <= wallHeight - spiderHeight / 2) {
    spider.style.top = coordinateOfY - spiderHeight / 2 + 'px';
  } else {
    spider.style.top = wallHeight - spiderHeight + 'px';
  }

  if (coordinateOfY <= spiderHeight / 2) {
    spider.style.top = 0 + 'px';
  }
});
