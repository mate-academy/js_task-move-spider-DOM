'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  const maxCoordX = wall.clientWidth - spider.clientWidth;
  const maxCoordY = wall.clientHeight - spider.clientHeight;

  let coordX = e.offsetX - spider.clientWidth / 2;
  let coordY = e.offsetY - spider.clientHeight / 2;

  coordX = coordX < 0 ? 0 : coordX;
  coordX = coordX > maxCoordX ? maxCoordX : coordX;

  coordY = coordY < 0 ? 0 : coordY;
  coordY = coordY > maxCoordY ? maxCoordY : coordY;

  spider.style.left = `${coordX}px`;
  spider.style.top = `${coordY}px`;
});
