'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const spider = document.querySelector('.spider');

  const clickCoordinateX = e.clientX;
  const clickCoordinateY = e.clientY;

  const wallCoordinates = wall.getBoundingClientRect();
  const wallCoordinateX = wallCoordinates.x;
  const wallCoordinateY = wallCoordinates.y;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const wallBorderLeft = wall.clientLeft;
  const wallBorderTop = wall.clientTop;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let calculatedX = (
    clickCoordinateX - wallCoordinateX - wallBorderLeft - spiderWidth / 2
  );

  let calculatedY = (
    clickCoordinateY - wallCoordinateY - wallBorderTop - spiderHeight / 2
  );

  if (calculatedX < 0) {
    calculatedX = 0;
  }

  if (calculatedY < 0) {
    calculatedY = 0;
  }

  if (calculatedX + spiderWidth > wallWidth) {
    calculatedX = wallWidth - spiderWidth;
  }

  if (calculatedY + spiderHeight > wallHeight) {
    calculatedY = wallHeight - spiderHeight;
  }

  spider.style.left = calculatedX + 'px';
  spider.style.top = calculatedY + 'px';
});
