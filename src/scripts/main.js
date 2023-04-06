'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const spiderCenter = spider.clientWidth / 2;
  const wall = document.querySelector('.wall');
  const wallWidt = wall.clientWidth - spider.clientWidth;
  const wallHeight = wall.clientHeight - spider.clientHeight;

  if (e.target !== wall) {
    return;
  }

  let yCoordinate = e.offsetY - spiderCenter;
  let xCoordinate = e.offsetX - spiderCenter;

  if (xCoordinate > wallWidt) {
    xCoordinate = wallWidt;
  }

  if (xCoordinate < 0) {
    xCoordinate = 0;
  }

  if (yCoordinate > wallHeight) {
    yCoordinate = wallHeight;
  }

  if (yCoordinate < 0) {
    yCoordinate = 0;
  }

  spider.style.top = `${yCoordinate}px`;
  spider.style.left = `${xCoordinate}px`;
});
