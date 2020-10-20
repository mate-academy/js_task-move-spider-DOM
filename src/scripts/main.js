'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

wall.addEventListener('click', event => {
  if (event.target === spider) {
    return;
  }

  const positionX = event.offsetX - spiderWidth / 2;
  const positionY = event.offsetY - spiderHeight / 2;

  spider.style.left = `${calcPosition(positionX, spiderWidth, wallWidth)}px`;
  spider.style.top = `${calcPosition(positionY, spiderHeight, wallHeight)}px`;
});

function calcPosition(position, objectSize, areaSize) {
  const maxPosition = areaSize - objectSize;

  if (position <= 0) {
    return 0;
  } else if (position >= maxPosition) {
    return maxPosition;
  } else {
    return position;
  }
}
