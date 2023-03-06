'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const maxX = wall.clientWidth - spider.clientWidth;
const maxY = wall.clientHeight - spider.clientWidth;
const indentLeft = wall.offsetLeft + wall.clientLeft;
const indentTop = wall.offsetTop + wall.clientTop;

document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  }

  let coordX = e.clientX - indentLeft - spider.clientWidth / 2;
  let coordY = e.clientY - indentTop - spider.clientHeight / 2;

  if (coordX > maxX) {
    coordX = maxX;
  }

  if (coordY > maxY) {
    coordY = maxY;
  }

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});
