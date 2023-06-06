'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallMaxY = wall.clientHeight - spider.clientHeight;
  const wallMaxX = wall.clientWidth - spider.clientWidth;

  if (e.target !== wall) {
    return;
  }

  let newCoordY = e.offsetY - spider.clientHeight / 2;
  let newCoordX = e.offsetX - spider.clientWidth / 2;

  if (newCoordX > wallMaxX) {
    newCoordX = wallMaxX;
  } else if (newCoordX < 0) {
    newCoordX = 0;
  }

  if (newCoordY > wallMaxY) {
    newCoordY = wallMaxY;
  } else if (newCoordY < 0) {
    newCoordY = 0;
  }

  spider.style.top = `${newCoordY}px`;
  spider.style.left = `${newCoordX}px`;
});
