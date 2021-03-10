'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const borderX = wall.clientWidth - spider.clientWidth;
const borderY = wall.clientHeight - spider.clientHeight;

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  let coordinateX = e.offsetX - spider.clientWidth / 2;
  let coordinateY = e.offsetY - spider.clientHeight / 2;

  if (coordinateX < 0) {
    coordinateX = 0;
  }

  if (coordinateX > borderX) {
    coordinateX = borderX;
  }

  if (coordinateY < 0) {
    coordinateY = 0;
  }

  if (coordinateY > borderY) {
    coordinateY = borderY;
  }

  spider.style.left = coordinateX + 'px';
  spider.style.top = coordinateY + 'px';
});
