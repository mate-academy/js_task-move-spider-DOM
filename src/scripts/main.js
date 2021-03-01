'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

wall.addEventListener('click', e => {
  const coordinateX = e.offsetX;
  const coordinateY = e.offsetY;
  let positionTop;
  let positionLeft;

  if (e.target === spider) {
    return;
  }

  if (coordinateX <= spiderWidth / 2) {
    positionLeft = 0;
  } else if (coordinateX >= wallWidth - spiderWidth) {
    positionLeft = wallWidth - spiderWidth + 'px';
  } else {
    positionLeft = coordinateX - (spiderWidth / 2) + 'px';
  }

  if (coordinateY <= spiderHeight / 2) {
    positionTop = 0;
  } else if (coordinateY >= wallHeight - spiderHeight) {
    positionTop = wallHeight - spiderHeight + 'px';
  } else {
    positionTop = coordinateY - (spiderHeight / 2) + 'px';
  }

  spider.style.top = positionTop;
  spider.style.left = positionLeft;
});
