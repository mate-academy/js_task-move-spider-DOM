'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const { x, y } = wall.getBoundingClientRect();

const spiderProps = spider.getBoundingClientRect();
const wallProps = wall.getBoundingClientRect();
const wallBorder = wall.clientLeft * 2;

const maxOffsetX = wallProps.width - spiderProps.width - wallBorder;
const maxoffsetY = wallProps.height - spiderProps.height - wallBorder;

wall.addEventListener('click', (e) => {
  const { clientX, clientY } = e;

  let coordX = clientX - x - wallBorder / 2 - spiderProps.width / 2;
  let coordY = clientY - y - wallBorder / 2 - spiderProps.height / 2;

  if (coordX > maxOffsetX) {
    coordX = maxOffsetX;
  }

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordY > maxoffsetY) {
    coordY = maxoffsetY;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  spider.style.left = coordX + 'px';
  spider.style.top = coordY + 'px';
});
