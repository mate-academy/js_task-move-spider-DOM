'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  let coordY = e.offsetY - spider.clientHeight / 2;
  let coordX = e.offsetX - spider.clientWidth / 2;
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

  spider.style = `
    top: ${coordY}px;
    left: ${coordX}px;
  `;

});
