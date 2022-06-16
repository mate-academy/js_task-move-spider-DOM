'use strict';

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = document.querySelector('.spider');
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const clickCoordX = e.clientX;
  const clickCoordY = e.clientY;

  const wallCoords = wall.getBoundingClientRect();
  const wallCoordX = wallCoords.x;
  const wallCoordY = wallCoords.y;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const wallBorderLeft = wall.clientLeft;
  const wallBorderTop = wall.clientTop;

  let calcSpiderLeft
    = clickCoordX - wallCoordX - wallBorderLeft - spiderWidth / 2;
  let calcSpiderTop
    = clickCoordY - wallCoordY - wallBorderTop - spiderHeight / 2;

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

  spider.style.left = calcSpiderLeft + 'px';
  spider.style.top = calcSpiderTop + 'px';
});
