'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  let coordX = e.offsetX - spider.offsetWidth / 2;
  let coordY = e.offsetY - spider.offsetWidth / 2;

  if (coordX < 0) {
    coordX = 0;
  }

  const maxCoordX = wall.clientWidth - spider.offsetWidth;
  const maxCoordY = wall.clientHeight - spider.offsetHeight;

  if (coordX > maxCoordX) {
    coordX = maxCoordX;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordY > maxCoordY) {
    coordY = maxCoordY;
  }

  spider.style.left = coordX + 'px';
  spider.style.top = coordY + 'px';
});
