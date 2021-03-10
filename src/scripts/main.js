'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;
const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;
const maxCoordsX = wallWidth - spiderWidth;
const maxCoordsY = wallHeight - spiderHeight;

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  };

  let coordsX = e.offsetX - (spiderWidth / 2);
  let coordsY = e.offsetY - (spiderHeight / 2);

  if (coordsX < 0) {
    coordsX = 0;
  }

  if (coordsY < 0) {
    coordsY = 0;
  }

  if (coordsY > maxCoordsY) {
    coordsY = maxCoordsY;
  }

  if (coordsX > maxCoordsX) {
    coordsX = maxCoordsX;
  }

  spider.style.top = `${coordsY}px`;
  spider.style.left = `${coordsX}px`;
}
);
