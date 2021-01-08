'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

function calculateCoord(moveToX, moveToY) {
  let coordX = 0;
  let coordY = 0;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  if (moveToX < spiderWidth / 2) {
    coordX = 0;
  } else if (moveToX > wallWidth - spiderWidth / 2) {
    coordX = wallWidth - spiderWidth;
  } else {
    coordX = moveToX - spiderWidth / 2;
  }

  if (moveToY < spiderHeight / 2) {
    coordY = 0;
  } else if (moveToY > wallHeight - spiderHeight / 2) {
    coordY = wallHeight - spiderHeight;
  } else {
    coordY = moveToY - spiderHeight / 2;
  }

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
}

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  calculateCoord(e.offsetX, e.offsetY);
});
