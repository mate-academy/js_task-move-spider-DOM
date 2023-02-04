'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const item = e.target;

  if (item !== wall) {
    return;
  }

  let coordX = e.offsetX - spider.clientWidth / 2;
  let coordY = e.offsetY - spider.clientHeight / 2;
  const maxCoordX = wall.clientWidth - spider.clientWidth;
  const maxCoordY = wall.clientHeight - spider.clientHeight;

  if (coordX > maxCoordX) {
    coordX = maxCoordX;
  }

  if (coordY > maxCoordY) {
    coordY = maxCoordY;
  }

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});
