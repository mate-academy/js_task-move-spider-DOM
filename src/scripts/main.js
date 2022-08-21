'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const maxX = wall.clientWidth - spider.offsetWidth;
const maxY = wall.clientHeight - spider.offsetHeight;

wall.addEventListener('click', (e) => {
  let coordinateX = e.offsetX - spider.offsetWidth / 2;
  let coordinateY = e.offsetY - spider.offsetHeight / 2;

  if (coordinateX < 0) {
    coordinateX = 0;
  }

  if (coordinateX > maxX) {
    coordinateX = maxX;
  }

  if (coordinateY < 0) {
    coordinateY = 0;
  }

  if (coordinateY > maxY) {
    coordinateY = maxY;
  }

  spider.style.cssText = `
    top: ${coordinateY}px;
    left: ${coordinateX}px;
    `;
});
