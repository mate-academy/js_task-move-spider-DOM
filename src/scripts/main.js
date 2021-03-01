'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

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

  let calculatedSpiderLeft = (clickCoordinateX - wallCoordinateX
    - wallBorderLeft - spiderWidth / 2);

  let calculatedSpiderTop = (clickCoordinateY - wallCoordinateY
    - wallBorderTop - spiderHeight / 2);

  if (calculatedSpiderLeft < 0) {
    calculatedSpiderLeft = 0;
  }

  if (calculatedSpiderTop < 0) {
    calculatedSpiderTop = 0;
  }

  if (calculatedSpiderLeft + spiderWidth > wallWidth) {
    calculatedSpiderLeft = wallWidth - spiderWidth;
  }

  if (calculatedSpiderTop + spiderHeight > wallHeight) {
    calculatedSpiderTop = wallHeight - spiderHeight;
  }

  spider.style.left = calculatedSpiderLeft + 'px';
  spider.style.top = calculatedSpiderTop + 'px';
});
