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

  switch (true) {
    case coordinateX <= spiderWidth / 2:
      positionLeft = 0;
      break;
    case coordinateX >= wallWidth - spiderWidth:
      positionLeft = wallWidth - spiderWidth + 'px';
      break;
    default:
      positionLeft = coordinateX - (spiderWidth / 2) + 'px';
  }

  switch (true) {
    case coordinateY <= spiderHeight / 2:
      positionTop = 0;
      break;
    case coordinateY >= wallHeight - spiderHeight:
      positionTop = wallHeight - spiderHeight + 'px';
      break;
    default:
      positionTop = coordinateY - (spiderHeight / 2) + 'px';
  };

  spider.style.top = positionTop;
  spider.style.left = positionLeft;
});
