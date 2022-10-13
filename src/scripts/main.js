'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const wallCoord = wall.getBoundingClientRect();
  const spiderCoord = spider.getBoundingClientRect();
  const pointerHalfWidth = e.width * 16 / 2;
  const pointerHalfHeight = e.height * 16 / 2;
  const wallBorderWidth = parseFloat(getComputedStyle(wall).borderWidth) * 2;
  const wallWidth = wallCoord.width;
  const wallHeight = wallCoord.height;
  const spiderWidth = spiderCoord.width;
  const spiderHeight = spiderCoord.height;
  const innerCoordX = e.clientX - wallCoord.x;
  const innerCoordY = e.clientY - wallCoord.y;

  if (e.clientX >= wallCoord.x
      && e.clientX <= wallCoord.x + wallWidth
      && e.clientY >= wallCoord.y
      && e.clientY <= wallCoord.y + wallHeight) {
    if (innerCoordX - spiderWidth / 2 - pointerHalfWidth < 0) {
      spider.style.left = 0;
    }

    if (innerCoordX + spiderWidth / 2 - pointerHalfWidth > wallWidth) {
      spider.style.left = wallWidth - spiderWidth - wallBorderWidth + 'px';
    }

    if (innerCoordX + spiderWidth
      / 2 - pointerHalfWidth < wallWidth - wallBorderWidth) {
      spider.style.left = innerCoordX - spiderWidth
      / 2 - pointerHalfWidth + 'px';
    }

    if (innerCoordY - spiderHeight / 2 - pointerHalfHeight < 0) {
      spider.style.top = 0;
    }

    if (innerCoordY + spiderHeight / 2 - pointerHalfHeight > wallHeight) {
      spider.style.top = wallHeight - spiderHeight - wallBorderWidth + 'px';
    }

    if (innerCoordY + spiderHeight
      / 2 - pointerHalfHeight < wallHeight - wallBorderWidth) {
      spider.style.top = innerCoordY - spiderHeight
      / 2 - pointerHalfHeight + 'px';
    }
  }
});
