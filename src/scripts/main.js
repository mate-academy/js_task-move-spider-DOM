'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', event => {
  let coordX = event.offsetX - spider.offsetWidth / 2;
  let coordY = event.offsetY - spider.offsetHeight / 2;

  const maxCoordX = wall.clientWidth - spider.offsetWidth;
  const minCoordY = wall.clientHeight - spider.offsetHeight;

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordX > maxCoordX) {
    coordX = maxCoordX;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordY > minCoordY) {
    coordY = minCoordY;
  }

  spider.style.left = coordX + 'px';
  spider.style.top = coordY + 'px';
});
