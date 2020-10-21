'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  let coordX = e.offsetX - spider.offsetWidth / 2;
  let coordY = e.offsetY - spider.offsetHeight / 2;
  const maxCoordX = wall.clientWidth - spider.offsetWidth;
  const maxCoordY = wall.clientHeight - spider.offsetHeight;

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordX > maxCoordX) {
    coordX = maxCoordX;
  }

  if (coordY > maxCoordY) {
    coordY = maxCoordY;
  }

  spider.style.left = `${coordX}px`;
  spider.style.top = `${coordY}px`;
});
