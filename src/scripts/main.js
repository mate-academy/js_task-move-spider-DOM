'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  let xCoordinate
    = e.clientX
    - wall.getBoundingClientRect().x
    - parseInt(getComputedStyle(wall).borderTopWidth)
    - spider.clientWidth / 2;
  let yCoordinate
    = e.clientY
    - wall.getBoundingClientRect().y
    - parseInt(getComputedStyle(wall).borderLeftWidth)
    - spider.clientHeight / 2;

  if (yCoordinate < spider.clientHeight / 2) {
    yCoordinate = 0;
  }

  if (yCoordinate + spider.clientHeight > wall.clientHeight) {
    yCoordinate = wall.clientHeight - spider.clientHeight;
  }

  if (xCoordinate < spider.clientWidth / 2) {
    xCoordinate = 0;
  }

  if (xCoordinate + spider.clientWidth > wall.clientWidth) {
    xCoordinate = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = `${yCoordinate}px`;
  spider.style.left = `${xCoordinate}px`;
});
