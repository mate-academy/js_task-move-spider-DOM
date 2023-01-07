'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  const clickX = e.clientX;
  const clickY = e.clientY;

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const wallBorderLeft = wall.clientLeft;
  const wallBorderTop = wall.clientTop;

  const wallCoordinates = wall.getBoundingClientRect();
  const wallCoordinateX = wallCoordinates.x;
  const wallCoordinateY = wallCoordinates.y;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let calcSpiderLeft = (
    clickX - wallCoordinateX - wallBorderLeft - spiderWidth / 2
  );

  let calcSpiderTop = (
    clickY - wallCoordinateY - wallBorderTop - spiderHeight / 2
  );

  if (calcSpiderLeft < 0) {
    calcSpiderLeft = 0;
  }

  if (calcSpiderTop < 0) {
    calcSpiderTop = 0;
  }

  if (calcSpiderLeft + spiderWidth > wallWidth) {
    calcSpiderLeft = wallWidth - spiderWidth;
  }

  if (calcSpiderTop + spiderHeight > wallHeight) {
    calcSpiderTop = wallHeight - spiderHeight;
  }

  if (!wall) {
    return;
  }

  spider.style.left = calcSpiderLeft + 'px';
  spider.style.top = calcSpiderTop + 'px';
});
