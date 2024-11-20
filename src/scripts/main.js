'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const {
  offsetLeft: wallOffsetX,
  offsetTop: wallOffsetY,
  clientLeft: wallBorderLeft,
  clientTop: wallBorderTop,
  clientWidth: wallWidth,
  clientHeight: wallHeight,
} = wall;

const { clientWidth: spiderWidth, clientHeight: spiderHeight } = spider;

const maxOffsetX = wallWidth - spiderWidth;
const maxOffsetY = wallHeight - spiderHeight;

wall.addEventListener('click', (e) => {
  e.preventDefault();

  const { clientX, clientY } = e;

  let coordX = clientX - wallOffsetX - wallBorderLeft - spiderWidth / 2;
  let coordY = clientY - wallOffsetY - wallBorderTop - spiderHeight / 2;

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordX > maxOffsetX) {
    coordX = maxOffsetX;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordY > maxOffsetY) {
    coordY = maxOffsetY;
  }

  spider.style.left = `${coordX}px`;
  spider.style.top = `${coordY}px`;
});
