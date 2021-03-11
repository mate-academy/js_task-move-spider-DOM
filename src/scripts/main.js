'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const spider = document.querySelector('.spider');

  const clickCoordinateX = e.offsetX;
  const clickCoordinateY = e.offsetY;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let calcultedPositionY = (clickCoordinateY - spiderHeight / 2);
  let calcultedPositionX = (clickCoordinateX - spiderWidth / 2);

  if (calcultedPositionX < 0) {
    calcultedPositionX = 0;
  }

  if (calcultedPositionY < 0) {
    calcultedPositionY = 0;
  }

  if (calcultedPositionX + spiderWidth > wallWidth) {
    calcultedPositionX = wallWidth - spiderWidth;
  }

  if (calcultedPositionY + spiderHeight > wallHeight) {
    calcultedPositionY = wallHeight - spiderHeight;
  }

  spider.style.left = calcultedPositionX + 'px';
  spider.style.top = calcultedPositionY + 'px';
});
